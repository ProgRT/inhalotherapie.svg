.PHONY: install

#nothing:
#	$(error No default target in makefile.)

inhalotherapie.svg: Inhalothérapie.svg
	inkscape \
		--export-plain-svg \
		--export-filename=inhalotherapie.svg \
		Inhalothérapie.svg
	git add inhalotherapie.svg

install:
	cp Inhalothérapie.svg ~/.config/inkscape/symbols/

clean:
	rm -r _site
