import type { Build } from "@/types/destiny"

export const dummyBuilds: Build[] = [
  {
    id: "void-placeholder",
    name: "The Void, Built out of Placeholders",
    class: "Warlock",
    subclass: "Void",
    description: "Placeholder build for the Void subclass. Built out of placeholders.",
    howItWorks: [],
    howItWorks2: [],
    imageUrl: "/placeholder.svg?height=300&width=600",
    tags: ["Void", "Warlock"],
    exotics: [],
    keyMods: [],
    targetStats: [],
    mode: "PvE",
    aspects: [],
    fragments: [],
  },
  {
    id: "strand-placeholder",
    name: "The Strand, Bound by Placeholders",
    class: "Warlock",
    subclass: "Strand",
    description: "Placeholder build for the Strand subclass. It's bound by placeholders.",
    howItWorks: [],
    howItWorks2: [],
    imageUrl: "/placeholder.svg?height=300&width=600",
    tags: ["Strand", "Warlock"],
    exotics: [],
    keyMods: [],
    targetStats: [],
    mode: "PvE",
    aspects: [],
    fragments: [],
  },
  {
    id: "stasis-placeholder",
    name: "The Stasis, Froze the Placeholders",
    class: "Warlock",
    subclass: "Stasis",
    description: "Placeholder build for the Stasis subclass. It can freeze the placeholders really well.",
    howItWorks: [],
    howItWorks2: [],
    imageUrl: "/placeholder.svg?height=300&width=600",
    tags: ["Stasis", "Warlock"],
    exotics: [],
    keyMods: [],
    targetStats: [],
    mode: "PvE",
    aspects: [],
    fragments: [],
  },
  {
    id: "rime-coat",
    name: "Rime-Coat Raiment",
    class: "Warlock",
    subclass: "Prismatic",
    description: "Aggressive build with Rime-Coat Raiment to freeze everything with multiple turrets and excessive Shatter damage.",
    howItWorks: [],
    howItWorks2: [],
    imageUrl: "/placeholder.svg?height=300&width=600",
    tags: ["Prismatic", "Warlock"],
    exotics: ["Rime-coat Raiment"],
    keyMods: [],
    targetStats: ["resilience", "discipline", "recovery"],
    mode: "PvE",
    aspects: ["Feed the Void", "Bleak Watcher"],
    fragments: ["Facet of Ruin", "Facet of Command", "Facet of Balance", "Facet of Protection", "Facet of Awakening"]
  },
  {
    id: "nighthawk",
    name: "Celestial Nighthawk",
    class: "Hunter",
    subclass: "Solar",
    description: "A high-damage build focused on maximizing Golden Gun damage for boss encounters.",
    howItWorks: [
      "The key thing with this build isn't really maxing intellect and forgetting about it, but using the fragments and mods to spam grenades and melees to maximize super energy.",
      "Gunpowder Gamble is great for this as its essentially a free grenade every so often for more super. Knock 'Em Down isn't essential, but the longer super time may be useful.",
      "If you did not know too, Celestial Nighthawk applies to Still Hunt as well and turns the three bullets into one super bullet."
    ],
    howItWorks2: [
      "Neutral Solar Hunter loop applies. Throwing knife attacks give radiant. Giving allies radiant gives you more energy regen. Scorching gives you melee energy. Ignition kills gives orbs and grenade energy.",
      "Knock Em' Down gives you your melee back on kills if you choose to run it. All your ability kills wil give you super energy with Hands-On and Ashes to Assets. Thats why its better to prio those over intellect.",
      "Dont feel afraid to use the super on generic yellow bars as killing gives back a third of your energy, and frequent ability kills will charge your super quickly."
    ],
    imageUrl: "/placeholder.svg?height=300&width=600",
    tags: ["Solar", "Boss DPS", "Hunter"],
    exotics: ["Celestial Nighthawk", "Still Hunt"],
    keyMods: ["Heavy Handed", "Focusing Strike", "Bomber", "Ashes to Assets", "Hands-On"],
    targetStats: ["mobility", "discipline", "strength"],
    mode: "PvE",
    aspects: ["Knock 'Em Down", "Gunpowder Gamble"],
    fragments: ["Ember of Wonder", "Ember of Searing", "Ember of Benevolence", "Ember of Torches", "Ember of Blistering"]
  },
  {
    "id": "cenotaph",
    "name": "Cenotaph Mask",
    "class": "Warlock",
    "subclass": "Solar",
    "description": "Showcase build for a generic support Cenotaph Mask build.",
    "howItWorks": [
      "Cenotaph Mask is an exotic helmet that marks enemies with a debuff on damage that if an ally kills, generates special ammo for you and heavy ammo for your teammates. Highly useful in scenarios where ammo is scarce and useful such as Grandmasters as well as Contest/Master raids.",
      "Cenotaph Mask does not mandate any specific subclass choices, but can be used in a variety of ways. Popular weapon choices are Divinity and The Navigator. Divinity provides a strong debuff and makes crits easier to land. The Navigator provides Woven Mail for teammates as well as a grapple point for faster reloads for Strand teammates.",
      "Well of Radiance is great for general support, but Strand or Void Warlocks have great neutral gameplay to help out with lackluster trace rifle damage."
    ],
    "howItWorks2": [],
    "imageUrl": "/placeholder.svg?height=300&width=600",
    "tags": ["Cenotaph", "Support", "Warlock"],
    "exotics": ["Cenotaph Mask", "Divinity", "The Navigator"],
    "keyMods": ["Impact Induction", "Focusing Strike"],
    "targetStats": ["resilience", "recovery", "intellect"],
    "mode": "PvE",
    "aspects": ["Touch of Flame", "Icarus Dash"],
    "fragments": ["Ember of Solace", "Ember of Torches", "Ember of Benevolence", "Ember of Empyrean"]
  },
  {
    "id": "sunbracer",
    "name": "Sunbracers",
    "class": "Warlock",
    "subclass": "Solar",
    "description": "Showcase build for a generic Sunbracers build. A great way to play Warlock in PvE.",
    "howItWorks": [
      "A charged melee kill is needed to proc the Sunbracers effect where you are able to throw at most 5 Solar Grenades. A very key thing is that if you are in the air, because of Heat Rises, you will gain a third of your melee energy on every kill, so be sure to activate Heat Rises before you go into the air by consuming a grenade.",
    ],
    "howItWorks2": [],
    "imageUrl": "/placeholder.svg?height=300&width=600",
    "tags": ["Sunbracers", "Warlock"],
    "exotics": ["Sunbracers"],
    "keyMods": ["Ashes to Assets", "Firepower", "Bolstering Detonation", "Momentum Transfer"],
    "targetStats": ["resilience", "recovery", "intellect"],
    "mode": "PvE",
    "aspects": ["Touch of Flame", "Heat Rises"],
    "fragments": ["Ember of Resolve", "Ember of Searing", "Ember of Benevolence", "Ember of Empyrean"]
  },
  {
    "id": "geomag",
    "name": "Geomag Stablizers",
    "class": "Warlock",
    "subclass": "Arc",
    "description": "A build that focuses on maximizing super uptime for use with Geomag Stablizers.",
    "howItWorks": [
      "Arc Warlock has become very good with the Heresy sandbox changes. Bolt Charge is a great new verb that is easy to proc consistently, and Geomag Stablizers gains far more super energy from Ionic Traces than before.",
      "Delicate Tomb then becomes an obvious synergy as collecting Ionic Traces buffs the weapon with a 100% damage buff (in pve).",
      "Coldheart is just otherwise a good trace and works well with the blinding fragments."
    ],
    "howItWorks2": [],
    "imageUrl": "/placeholder.svg?height=300&width=600",
    "tags": ["Arc", "Boss DPS", "Warlock"],
    "exotics": ["Geomag Stabilizers", "Delicate Tomb", "Coldheart"],
    "keyMods": ["Heavy Handed", "Focusing Strike", "Bomber", "Ashes to Assets", "Hands-On"],
    "targetStats": ["resilience", "discipline", "recovery"],
    "mode": "PvE",
    "aspects": ["Ionic Sentry", "Electrostatic Mind"],
    "fragments": ["Spark of Frequency","Spark of Ions", "Spark of Discharge", "Spark of Resistance", "Spark of Beacons"]
  }
]

