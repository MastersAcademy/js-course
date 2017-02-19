const path = {
      src: {
          less:   'src/**/*.less',
          img:    'src/assets/img/**/*.*',
          fonts:  'src/assets/fonts/*.+(woff|woff2)',
          helper: ['src/app/styles/styles.css',
                   'src/**/index.html']
      },
      dist: {
          css:    'src/',
          js:     'dist/',
          img:    'dist/assets/img/',
          fonts:  'dist/assets/fonts/',
          helper: 'dist/'
      },
      watch: {
          less:   'src/**/*.less',
          js:     'dist/*.js',
          img:    'src/assets/img/**/*.*',
          fonts:  'src/assets/fonts/*.*',
          helper: ['src/**/index.html',
                   'dist/*.js']
      },
      clean: [   'dist/*',
                 '!dist/assets',
                 '!dist/favicon.ico',
                 '!dist/*.xml',
                 'src/**/*.+(css|map|json|js)'
            ],
      tasks:     './gulp/tasks/'
};

module.exports = path;
