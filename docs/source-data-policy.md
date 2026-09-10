# Source Data Policy

## Coordinate authority

Ender's Ashen Empires map aims to be pixel-perfect. Marker coordinates in this project should
represent exact in-game positions whenever possible.

External fan sites, including AE Database, may be used for general reference material, naming,
location descriptions, dungeon/area awareness, monster context, and missing-content discovery.
They should **not** be treated as authoritative for precise marker coordinates unless Ender has
verified the coordinate against the current map/in-game position.

## AE Database usage

AE Database uses older versions of Ender's map tiles and contains useful historical/game reference
material. Its world map and location pages may help identify:

- area names
- dungeon and cave existence
- general surrounding areas
- mobs/monster context
- possible entrances or missing places to investigate
- general information for marker flyouts

Do not directly import AE Database map coordinates into production marker data as final coordinates.
If coordinates are scraped or derived from AE Database for triage, mark them as provisional.

## Provisional coordinate rule

Any data sourced from AE Database or another non-Ender/non-in-game source must carry a clear note,
for example:

```text
source: AE Database
coordinateConfidence: provisional
needsPixelVerification: true
```

Use provisional data only as a to-review backlog, not as finished map truth.

## Finished coordinate rule

A marker should only be considered pixel-perfect/final when Ender verifies it against the current
map tiles and/or the exact in-game NPC/object/entrance position.

## Working principle

Use external sites to make the fog-of-war backlog smarter. Use Ender's map and in-game verification
to make the final coordinates accurate.
