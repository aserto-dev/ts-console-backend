# ts-console-backend
Automated generation of Aserto Console Backend TypeScript type definitions.

## Consuming the definitions
These definitions can be consumed by `yarn` from npm:
```
"devDependencies": {
    "@aserto/ts-console-backend": "^v0.0.1",
```

or directly from `git` using the following reference:
```
"devDependencies": {
    "@aserto/ts-console-backend": "git+https://github.com/aserto-dev/ts-console-backend.git#v0.0.1",
```

Replace `v0.0.1` with the tag you would like to use.

## Generation Process
- `OPENAPI_SAH=main yarn generate`

## GitHub Workflow
The GitHub Workflow is triggered as a workflow_dispatch. It expects to be provided with two required parameters:
- PROTO_REF: The version tag of `aserto-dev/pb-console-backend` that is represented by the `OPENAPI_SHA`. This is used to tag the `ts-console-backend` commit with the same proto version.
- OPENAPI_SHA: The `aserto-dev/openapi-console-backend` commit hash for which type definitions should be created.

Using these variables the GitHub Workflow runs the same `./generate.sh` script, commits, and tags its results for downstream consumption. Run results are deterministic as explicit commit hash and version numbers are taken as explicit input parameters.
