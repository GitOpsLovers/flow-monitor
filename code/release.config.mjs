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
                        path: 'code/apps/installer/dist/*',
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
