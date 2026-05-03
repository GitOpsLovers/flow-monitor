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
            '@semantic-release/github', {
                assets: [
                    {
                        path: 'apps/installer/dist/*',
                        name: 'flow-monitor-installer-${nextRelease.version}',
                        label: 'Installer (${nextRelease.version})'
                    },
                ],
            }
        ],
        [
            '@semantic-release/git', {
                assets: [
                    'CHANGELOG.md',
                ],
                message: 'chore(release): ${nextRelease.version} [skip ci]',
            }
        ],
    ],
};
