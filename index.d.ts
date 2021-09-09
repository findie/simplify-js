interface Point2 {
	x: number;
	y: number;
}
interface Point3 {
	x: number;
	y: number;
	z: number;
}

declare function simplify<IS3D extends boolean, T extends (IS3D extends true ? Point3 : Point2)>(
	points: T[],
	is3D: IS3D,
  tolerance?: number,
	highQuality?: boolean,
): T[];
declare namespace simplify {}

export = simplify;
