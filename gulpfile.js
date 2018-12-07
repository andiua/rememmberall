var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');


gulp.task('sprite', function() {
	var spriteData =
			gulp.src('./src/img/sprite/*.*') // путь, откуда берем картинки для спрайта
					.pipe(spritesmith({
							imgName: 'sprite.png',
							cssName: '_sprite.scss',
							cssFormat: 'scss',
							padding: 15
					}));

	spriteData.img.pipe(gulp.dest('./app/img/')); // путь, куда сохраняем картинку
	spriteData.css.pipe(gulp.dest('./src/scss/components')); // путь, куда сохраняем стили
});