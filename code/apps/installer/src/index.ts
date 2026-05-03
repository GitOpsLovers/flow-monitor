import { execSync } from 'child_process';
import { randomBytes } from 'crypto';
import { writeFileSync } from 'fs';
import { parseArgs } from 'util';

const { values } = parseArgs({
    args: process.argv.slice(2),
    options: {
        version: { type: 'string', default: 'main' },
    },
});

const REPO_RAW_URL = `https://raw.githubusercontent.com/GitOpsLovers/flow-monitor/${values.version}`;

function commandExists(command: string): boolean {
    try {
        execSync(`which ${command}`, { stdio: 'ignore' });
        return true;
    } catch {
        return false;
    }
}

function installDocker(): void {
    console.log('🐳 Docker not found, installing...');
    execSync('curl -fsSL https://get.docker.com | sh', { stdio: 'inherit' });
}

function installDockerCompose(): void {
    console.log('🐳 Docker Compose not found, installing...');
    execSync(
        'curl -SL https://github.com/docker/compose/releases/latest/download/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose',
        { stdio: 'inherit' },
    );
    execSync('chmod +x /usr/local/bin/docker-compose', { stdio: 'inherit' });
}

function checkAndInstallDependencies(): void {
    console.log('🔍 Checking dependencies...');

    if (!commandExists('docker')) {
        installDocker();
    } else {
        console.log('✅ Docker found');
    }

    if (!commandExists('docker-compose')) {
        installDockerCompose();
    } else {
        console.log('✅ Docker Compose found');
    }
}

function downloadDockerCompose(): void {
    console.log('📥 Downloading docker-compose.yml...');
    execSync(
        `curl -fsSL ${REPO_RAW_URL}/code/deploy/docker-compose.yml -o ./docker-compose.yml`,
        { stdio: 'inherit' },
    );
    console.log('✅ docker-compose.yml downloaded');
}

function createEnvFile(): void {
    console.log('🔐 Generating environment configuration...');

    const webhookSecret = randomBytes(32).toString('hex');
    const dbPassword = randomBytes(16).toString('hex');

    // Construimos el contenido del .env
    const envContent = [
        `PORT=3000`,
        `GITHUB_WEBHOOK_SECRET=${webhookSecret}`,
        `DB_PASSWORD=${dbPassword}`,
        `DATABASE_URL=postgres://admin:${dbPassword}@db:5432/flow_metrics`,
        `NODE_ENV=production`
    ].join('\n');

    // Lo guardamos en el directorio actual (.)
    writeFileSync('./.env', envContent, { encoding: 'utf8' });
    console.log('✅ .env file created successfully.');
}

async function runInstaller() {
    console.log('Launching Flow Monitor installation...');

    // 1. Checks
    checkAndInstallDependencies();

    // 2. Download docker-compose.yml
    downloadDockerCompose();

    // 3. Create .env file
    createEnvFile();

    // 4. Start containers
    console.log('📦 Starting containers...');

    execSync('docker-compose up -d', { stdio: 'inherit' });

    console.log('✅ Installation completed!');
    console.log('🔗 Configure your App at: http://your-ip:3000/setup');
}

runInstaller();
