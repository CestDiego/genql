export const NPM_SCOPE =
    process.env.NODE_ENV === 'production'
        ? '@genql'
        : '@shitty-scope-name'
export const NPM_TOKEN = process.env.NPM_TOKEN
export const FIREBASE_ID_TOKEN_COOKIE = 'FIREBASE_ID_TOKEN_COOKIE'
export const SESSION_STORAGE_CONFIG_KEY = 'SESSION_STORAGE_CONFIG_KEY'
console.assert('NPM_TOKEN', NPM_TOKEN)
console.log('NODE_ENV', process.env.NODE_ENV)


export const BG = '#2d3748'


export const GITHUB_LINK = 'https://github.com/remorses/genql'
export const DOCS_LINK = '/docs'

export const FIREBASE_ADMIN_CONFIG = JSON.parse(process.env.FIREBASE_ADMIN_CONFIG || '{}')
// console.log('FIREBASE_ADMIN_CONFIG', FIREBASE_ADMIN_CONFIG)

export var firebaseConfig = {
    apiKey: 'AIzaSyABYuGq1OrRbgMQcXUHUJ0FnzNeXtb3Sio',
    authDomain: 'genql-429a9.firebaseapp.com',
    databaseURL: 'https://genql-429a9.firebaseio.com',
    projectId: 'genql-429a9',
    storageBucket: 'genql-429a9.appspot.com',
    messagingSenderId: '713360032995',
    appId: '1:713360032995:web:9b8d3b60cc1cdf3014b1d6',
    measurementId: 'G-RPVFDSW03K',
}
