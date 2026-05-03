export default {
    branches: ['main'],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        [
            '@semantic-release/changelog', {
                changelogFile: 'CHANGELOG.md',
            }
        ],
        [
            '@semantic-release/exec', {
                prepareCmd: [
                    'sed -i "s/VERSION=\\".*\\"/VERSION=\\"v${nextRelease.version}\\"/" ./deploy/install.sh',
                    'sed -i "s|flow-monitor-backend:.*|flow-monitor-backend:v${nextRelease.version}|" ./deploy/docker-compose.yml',
                ],
            }
        ],
        [
            '@semantic-release/github', {
                assets: [
                    {
                        path: 'apps/installer/dist/*',
                        name: 'flow-monitor-installer',
                        label: 'Installer (${nextRelease.version})'
                    },
                ],
            }
        ],
        [
            '@semantic-release/git', {
                assets: [
                    'CHANGELOG.md',
                    'deploy/install.sh',
                ],
                message: 'chore(release): ${nextRelease.version} [skip ci]',
            }
        ],
    ],
};
