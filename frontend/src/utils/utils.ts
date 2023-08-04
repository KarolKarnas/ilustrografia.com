export const findSubstring = (input: string): string | null => {
  if (!input) {
    return null; // Return null for undefined input
  }
  const substringsToCheck = [
    'art-print',
    'painting-on-canvas',
    'poster',
    'premium-print',
  ];
  const regex = new RegExp(substringsToCheck.join('|'), 'i'); // 'i' flag for case-insensitive matching
  const match = input.match(regex);
  return match ? match[0] : null;
}


// export const findData = (project, creatureShortName product) => {
//   let variationShortName: string | null;
// 	let variationData: ProductVariation | undefined;
// 	if (product !== undefined) {
// 		variationShortName = findSubstring(product);
// 		// console.log('Matched substring:', variationShortName);
// 		if (variationShortName) {
// 			variationData = productVariations.find(
// 				(varia) => varia.shortName === variationShortName
// 			);
// 			console.log(variationData);
// 		} else {
// 			console.log('variation undefined');
// 		}
// 	} else {
// 		console.log('Product is undefined.');
// 	}

// 	const projectData = projects.find((proj) => proj.shortName === project);
// 	// console.log(projectData);
// 	let creatureData;
// 	if (projectData) {
// 		creatureData = projectData.creatures.find(
// 			(creature) => creature.shortName === creatureShortName
// 		);
// 		// console.log(creatureData);
// 	}
// }