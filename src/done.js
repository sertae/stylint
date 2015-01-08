/**
 * @description outputs our error messages when complete (or a thumbs up if no errors)
 * @return void
 */
module.exports = function done() {
    'use strict';
    var i = 0,
        app = this,
        len = app.warnings.length;

    for ( i; i < len; i++ ) {
        console.log( app.chalk.yellow('Warning: '), app.warnings[i], '\n' );
    }

    // if you set a max it displays a slightly more annoying message (that'll show em!)
    if ( app.config.maxWarnings && len > app.config.maxWarnings ) {
        console.log( '\uD83D\uDCA9 ', app.chalk.underline.red( 'Stylint: ' + len + ' warnings. Max is set to: ' + this.config.maxWarnings + '\n' ) );
    }
    else if ( len === 0 ) {
        console.log( '\n \uD83D\uDC4D ', app.chalk.blue( 'Stylint: You\'re all clear!\n' ) );
    }
    else {
        console.log( '\uD83D\uDCA9 ', app.chalk.yellow( len + ' Warnings\n' ) );
    }

    // reset in case of watch
    app.warnings = [];
}