const database = {
	heroes: [
		{
			id: 1,
			name: "Dynoguy",
			power: "Fire blasts",
		},
		{
			id: 2,
			name: "Hyperspeed",
			power: "Super speed",
		},
		{
			id: 3,
			name: "Telekinesis Melvin",
			power: "Telekinetic manipulation",
		},
		{
			id: 4,
			name: "Frostbite Frank",
			power: "Ice manipulation",
		},
		{
			id: 5,
			name: "Moltenman",
			power: "Magma generation",
		},
		{
			id: 6,
			name: "Shadowstrike",
			power: "Shadow manipulation",
		},
		{
			id: 7,
			name: "Thunder Clapper",
			power: "Sonic boom generation",
		},
		{
			id: 8,
			name: "Invisible Man",
			power: "Invisibility",
		},
		{
			id: 9,
			name: "Phoenix",
			power: "Rebirth and regeneration",
		},
		{
			id: 10,
			name: "Electro",
			power: "Electric manipulation",
		},
	],
	villains: [
		{
			id: 1,
			name: "Dr. Doom",
			power: "Genius-level intellect, mastery of magic and sorcery, advanced technology",
		},
		{
			id: 2,
			name: "Joker",
			power: "High intelligence, master chemist, expert tactician, unpredictable behavior",
		},
		{
			id: 3,
			name: "Magneto",
			power: "Magnetokinesis, control over metal, electromagnetic manipulation",
		},
		{
			id: 4,
			name: "Thanos",
			power: "Superhuman strength, durability, intelligence, energy manipulation, telekinesis, telepathy",
		},
		{
			id: 5,
			name: "Lex Luthor",
			power: "Genius-level intellect, wealth, political influence, advanced technology",
		},
		{
			id: 6,
			name: "Harley Quinn",
			power: "Enhanced agility, strength, intelligence, skilled gymnast, weaponry expertise",
		},
		{
			id: 7,
			name: "Venom",
			power: "Symbiote bonding, superhuman strength, speed, agility, durability, shapeshifting",
		},
		{
			id: 8,
			name: "Ultron",
			power: "Superhuman intelligence, robotic body with various abilities, ability to upgrade and evolve",
		},
		{
			id: 9,
			name: "Darkseid",
			power: "Superhuman strength, durability, Omega Beams (energy projection), immortality",
		},
		{
			id: 10,
			name: "Harvey Two-Face",
			power: "Master strategist, skilled marksman, dual personality, obsession with duality and chance",
		},
	],
};

export const getHeroes = () => {
	return database.heroes.map((hero) => ({ ...hero }));
};

export const getVillains = () => {
    return database.villains.map((villain) => ({...villain}))
}