module.exports = api => {

    api.extendPackage({
        devDependencies: {
            "webdriverio": "^4.13.1"
        }
    })

    api.extendPackage({
        scripts: {
            'test:e2e': 'wdio'
        }
    })
}