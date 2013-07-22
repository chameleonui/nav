
build: components nav.styl
	@component build

example: components example.styl build
	rm -fr build
	@component build
	@stylus example.styl

components: component.json
	@component install --dev

clean:
	rm -fr build components

.PHONY: clean
