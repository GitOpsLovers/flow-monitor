import { execSync } from 'child_process';

const REPO_RAW_URL = 'https://raw.githubusercontent.com/tu-usuario/flow-monitor/main';

function commandExists(command: string): boolean {
    try {
        execSync(`which ${command}`, { stdio: 'ignore' });
        return true;
    } catch {
        return false;
    }
}

function installDocker(): void {
    console.log('🐳 Docker no encontrado, instalando...');
    execSync('curl -fsSL https://get.docker.com | sh', { stdio: 'inherit' });
}

function installDockerCompose(): void {
    console.log('🐳 Docker Compose no encontrado, instalando...');
    execSync(
        'curl -SL https://github.com/docker/compose/releases/latest/download/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose',
        { stdio: 'inherit' },
    );
    execSync('chmod +x /usr/local/bin/docker-compose', { stdio: 'inherit' });
}

function checkAndInstallDependencies(): void {
    console.log('🔍 Comprobando dependencias...');

    if (!commandExists('docker')) {
        installDocker();
    } else {
        console.log('✅ Docker encontrado');
    }

    if (!commandExists('docker-compose')) {
        installDockerCompose();
    } else {
        console.log('✅ Docker Compose encontrado');
    }
}

function downloadDockerCompose(): void {
    console.log('📥 Descargando docker-compose.yml...');
    execSync(
        `curl -fsSL ${REPO_RAW_URL}/docker-compose.yml -o ./docker-compose.yml`,
        { stdio: 'inherit' },
    );
    console.log('✅ docker-compose.yml descargado');
}

async function runInstaller() {
    console.log('🚀 Iniciando instalador de @flow-monitor...');

    // 1. Checks
    checkAndInstallDependencies();

    // 2. Descargar docker-compose.yml
    downloadDockerCompose();

    // 3. Levantar todo
    console.log('📦 Levantando contenedores...');
    execSync('docker-compose up -d', { stdio: 'inherit' });

    console.log('✅ ¡Instalación completada!');
    console.log('🔗 Configura tu App en: http://tu-ip:3000/setup');
}

runInstaller();
