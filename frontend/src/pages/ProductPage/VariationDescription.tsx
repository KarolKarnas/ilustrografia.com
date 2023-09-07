type Props = {
	variationMaterial: string;
};

const VariationDescription = ({ variationMaterial }: Props) => {
	if (variationMaterial === 'art-print') {
		return (
			<>
				Fine Art Print (Giclée) prints are the highest quality pigment printing
				based on a resin-based foundation that utilizes archival-grade
				materials. What does this mean? It means that your print employs the
				same technology used by museums and auction houses; it doesn&apos;t
				yellow, fade, and maintains its quality guaranteed for at least 100
				years. This most professional artistic printing method is also enhanced
				by the use of acid-free papers, allowing every detail and color to be
				visible. The Fine Art Print method will provide you with a print of
				absolutely the best quality parameters available on the market. In
				addition to its longevity and brilliant presentation. Furthermore,
				Giclée prints, when signed by the original author, gain collector&apos;s
				value and are treated on par with modern art works. Isn&apos;t it time
				to invest in perfection?
			</>
		);
	} else if (variationMaterial === 'painting-on-canvas') {
		return (
			<>
				These unique prints are created on Canvas fabric with a cotton-like
				texture. This material has an incredible texture that will give your
				artwork an extraordinary character and atmosphere. All of this is topped
				off by stretching the print on wooden, pine frames, resulting in a
				phenomenal effect reminiscent of a real painting. Also, please note that
				only eco-friendly and odorless inks were used in the production of the
				artwork, ensuring safety for your health and the environment. Hanging
				the artwork on your wall will be made easier as well - the canvas is
				stretched over a natural wooden structure with printed side edges, so
				you don&apos;t need to frame the artwork. Choose and hang with ease!
			</>
		);
	} else if (variationMaterial === 'poster') {
		return (
			<>
				The poster print is created using an inkjet printer, where water-based
				inks are replaced with eco-solvent pigment inks. These inks, based on
				organic solvents, are environmentally friendly, so you&apos;re
				consciously supporting the well-being of our planet. You can be
				confident that you&apos;re making a wise investment in a poster.
				Furthermore, eco-solvent inks are known for their high print resistance,
				especially to sunlight. This means that you&apos;ll have the flexibility
				to hang the poster in both sunny and shaded areas without affecting the
				quality of the illustration. The print is made on a slightly stiff and
				durable 200g paper, allowing you to enjoy its longevity. Do you already
				know which poster you&apos;ll choose?
			</>
		);
	} else if (variationMaterial === 'premium-print') {
		return (
			<>
				The Premium print uses inkjet technology in collaboration with
				semi-matte, thick 265g paper, creating an illustration that delicately
				and intriguingly reflects light. Moreover, this paper exhibits
				remarkable durability, being much more resistant to deformations and
				moisture in the room. Additionally, specialized emulsion was used in the
				paper production, creating a coating that guarantees strong, vibrant
				colors, as well as high print quality and sharpness. As a result, your
				illustration will not only have an extraordinary, distinctive appearance
				but also durability and solidity, allowing you to enjoy it for many
				years. Treat yourself to a Premium print!
			</>
		);
	} else {
		return <div>{variationMaterial}</div>;
	}
};
export default VariationDescription;
