.PHONY: install

inhalotherapie.svg: Inhalothérapie.svg
	inkscape \
		--export-plain-svg \
		--export-filename=inhalotherapie.svg \
		Inhalothérapie.svg
	git add inhalotherapie.svg

thumbnail.png:
	inkscape --export-area-drawing --export-filename thumbnail.png Inhalothérapie.svg

install:
	cp Inhalothérapie.svg ~/.config/inkscape/symbols/

clean:
	rm -r _site
