exports.isProduction = process.env.NODE_ENV === 'production'

exports.isDevelopment = process.env.NODE_ENV === 'development'

exports.isBuildingControl = process.env.BUILD_MODE === 'CTRL'
