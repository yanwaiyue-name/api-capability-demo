# API Capability Demo

This repo was created and populated purely through the GitHub REST API.

- createRepo: gh repo create
- writeFile: PUT /repos/{owner}/{repo}/contents/{path}
- updateFile: same call + sha
- readBack: GET /repos/{owner}/{repo}/contents/{path}
- tree: GET /repos/{owner}/{repo}/git/trees
- download: tarball via codeload
