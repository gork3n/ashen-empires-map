# Ashen Empires Map Health Report

Generated: 2026-09-10T14:30:39.196Z

## Summary

| Collection | Entries | Missing images | Placeholders | Connectors | `flyTo` | `flyToId` | `0,0` targets | Dangling IDs |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Overworld markers | 927 | 834 | 821 | 162 | 161 | 1 | 95 | 0 |
| Underworld markers | 115 | 115 | 1 | 110 | 109 | 1 | 0 | 0 |
| Overworld labels | 215 | 3 | 211 | 0 | 0 | 0 | 0 | 0 |
| Underworld labels | 51 | 1 | 46 | 0 | 0 | 0 | 0 | 0 |

## Recommended next queues

1. Replace `0,0` connector targets first; those are visibly broken navigation points.
2. Migrate connector pairs from coordinate `flyTo` to stable `flyToId` in small batches.
3. Fill missing marker images by region/place using the generated CSV checklists.
4. Replace placeholder info text after connector navigation is trustworthy.
5. Add housing realm as a data/tile layer only after the tile storage plan is settled.

## Overworld markers

```json
{
  "entries": 927,
  "groups": 5,
  "ids": 1,
  "uniqueIds": 1,
  "duplicateIds": 0,
  "imageFields": 927,
  "emptyImageFields": 0,
  "missingImages": 834,
  "placeholders": 821,
  "connectors": 162,
  "coordinateConnectors": 161,
  "idConnectors": 1,
  "connectorsMissingTarget": 0,
  "zeroZeroConnectorTargets": 95,
  "danglingFlyToIds": 0
}
```

### Top types

- overworld_quest: 93
- overworld_dock: 65
- overworld_ladder: 52
- overworld_trainer: 51
- overworld_shop_pub: 43
- overworld_shop_provisioner: 41
- overworld_shop_magic: 37
- overworld_shop_weaponry: 37
- overworld_bank: 36
- overworld_stairs: 32

### First `0,0` connector targets

- js/markers.js undergrounds[0] — Frump's Lair (Valinor)
- js/markers.js undergrounds[1] — Bonesnarl's Lair (Valinor)
- js/markers.js undergrounds[2] — Stairs to Valinor Basement (Valinor)
- js/markers.js undergrounds[3] — Stairs to Valinor Basement (Valinor)
- js/markers.js undergrounds[4] — Stairs to Valinor Basement (Valinor)
- js/markers.js undergrounds[5] — Stairs to Valinor Basement (Valinor)
- js/markers.js undergrounds[6] — Ladder to Valinor Basement (Valinor)
- js/markers.js undergrounds[7] — Ladder to Valinor Basement (Valinor)
- js/markers.js undergrounds[8] — Stairs to Mage Trainers (Valinor)
- js/markers.js undergrounds[12] — Lotor's Castle Arena Basement (Lotor's Castle)
- js/markers.js undergrounds[13] — Lotor's Castle Arena Basement (Lotor's Castle)
- js/markers.js undergrounds[15] — Cultist Lair Crypt (Cultist Lair Crypt)
- js/markers.js undergrounds[16] — Snake Pit (Silvest Valley)
- js/markers.js undergrounds[17] — Cliffside Mines (Cliffside Pass)
- js/markers.js undergrounds[21] — Sozal's Cave North Entrance (Sozal's Cave)

### First missing images

- images/markers/Party_Island_to_LSP_Portal.png — Portal to Lotor's Summer Palace (Party Island)
- images/markers/Valinor_to_Leave_Valinor_Portal.png — Portal to Leave Valinor (Valinor)
- images/markers/Valinor_to_Arena_Viewing_Area_Portal.png — Portal to Arena Viewing Area (Valinor)
- images/portals/Lotors_Summer_Palace_Portal.png — Portal to Lotor's Summer Palace (Silvest)
- images/portals/Lotors_Jail_Portal.png — Portal to Lotor's Jail (Lotor's Castle)
- images/portals/Lotors_Jail_Portal.png — Portal to Outside Lotor's Castle (Lotor's Castle)
- images/portals/Lotors_Prison_Portal.png — Portal to Outside Lotor's Prison (Lotor's Castle)
- images/markers/Krythan_to_Highlands_West_of_Parian_Portal.png — Portal to Highlands West of Parian (Krythan Fields)
- images/markers/Krythan_to_Darkwoods_North_of_Josody_Portal.png — Portal to Darkwoods North of Josody (Krythan Fields)
- images/markers/Krythan_to_Hell_Portal.png — Portal to Hell (Krythan Fields)
- images/markers/Krythan_to_Scarab_Island_Portal.png — Portal to Scarab Island (Krythan Fields)
- images/markers/Scarab_Island_to_Krythan_Region_Portal.png — Portal to Krythan Region (Scarab Island)
- images/markers/Darkwoods_to_Krythan_Island_West_of_New_Korelth_Portal.png — Portal to Krythan Island (West of New Korelth) (Darkwoods)
- images/markers/Darkwoods_to_LSP_Portal.png — Portal to Lotor's Summer Palace (Josody)
- images/markers/Darkwoods_to_Highlands_Southeast_of_Parian_Portal.png — Portal to Highlands (Southeast of Parian) (Darkwoods)

## Underworld markers

```json
{
  "entries": 115,
  "groups": 4,
  "ids": 1,
  "uniqueIds": 1,
  "duplicateIds": 0,
  "imageFields": 115,
  "emptyImageFields": 0,
  "missingImages": 115,
  "placeholders": 1,
  "connectors": 110,
  "coordinateConnectors": 109,
  "idConnectors": 1,
  "connectorsMissingTarget": 0,
  "zeroZeroConnectorTargets": 0,
  "danglingFlyToIds": 0
}
```

### Top types

- underworld_ladder: 48
- underworld_stairs: 26
- underworld_hole: 20
- underworld_cave: 9
- underworld_portal_small: 5
- underworld_crypt: 1
- underworld_inn_keeper: 1
- underworld_mine: 1
- underworld_quest: 1
- underworld_shop_leather: 1

### First missing images

- images/markers/Jeel_Catacombs_Ladder_Exit.png — Jeel Catacombs Exit (Crypts of Ryonkah)
- images/markers/Jeel_Catacombs_Ladder_Exit.png — Jeel Catacombs Exit (Crypts of Ryonkah)
- images/markers/Spore_Cave_Portal.png — Spore Cave Level 4 Portal (Spore Cave)
- images/markers/Portal_Mukarramma_Dungeon.png — Mukarramma Dungeon Exit Portal (Mukarramma Dungeon)
- images/markers/Portal_Shadow_Dragons.png — Portal to Shadow Dragons (Elemental Cave Khafra Side)
- images/markers/Hamad's_Leatherworking_Shop.png — Hamad's Leatherworking Shop (Ruhura)
- images/markers/Grell_Innkeeper.png — Grell Innkeeper (Grell)
- images/markers/Grell_Town_Guardian.png — Town Guardian (Grell)
- images/markers/Grell_Town_Wizard_of_Insight.png — Town Wizard of Insight (Grell)
- images/markers/Holendar.png — Holendar (Emporium Abbey)
- images/markers/Silvest_Library_Basement_Exit.png — Silvest Library Basement Exit (Silvest Library)
- images/markers/Coenred_Provisioner_Shop_Basement_Exit.png — Coenred's Provisioner Shop Basement Exit (Coenred's Provisioner Shop)
- images/markers/Silvest_Mines_Exit.png — Silvest Mines Exit (Silvest Mines)
- images/markers/Kobold_Castle_Entrance.png — Kobold Castle Entrance (Kobold Castle)
- images/markers/Karzak_Cove_Silvest_Mine_Exit.png — Silvest Mines Exit (Karzak Cove)

## Overworld labels

```json
{
  "entries": 215,
  "groups": 8,
  "ids": 0,
  "uniqueIds": 0,
  "duplicateIds": 0,
  "imageFields": 215,
  "emptyImageFields": 212,
  "missingImages": 3,
  "placeholders": 211,
  "connectors": 0,
  "coordinateConnectors": 0,
  "idConnectors": 0,
  "connectorsMissingTarget": 0,
  "zeroZeroConnectorTargets": 0,
  "danglingFlyToIds": 0
}
```

### Top types

- unknown: 215

### First missing images

- images/Valinor_Island-600x.png — Valinor (unknown place)
- images/Party_Island.png — Party Island (unknown place)
- images/LSP.png — Lotor's Summer Palace (unknown place)

## Underworld labels

```json
{
  "entries": 51,
  "groups": 11,
  "ids": 0,
  "uniqueIds": 0,
  "duplicateIds": 0,
  "imageFields": 51,
  "emptyImageFields": 50,
  "missingImages": 1,
  "placeholders": 46,
  "connectors": 0,
  "coordinateConnectors": 0,
  "idConnectors": 0,
  "connectorsMissingTarget": 0,
  "zeroZeroConnectorTargets": 0,
  "danglingFlyToIds": 0
}
```

### Top types

- unknown: 51

### First missing images

- images/underground/leather-shop-basement.png — Leather Shop Basement (unknown place)

## Generated files

- `reports/map-health.json` — complete machine-readable report.
- `reports/map-health.md` — human-readable summary.
- `reports/missing-images.csv` — image backlog.
- `reports/placeholder-details.csv` — incomplete lore/info backlog.
- `reports/connector-coordinate-links.csv` — coordinate-based connectors to migrate.
- `reports/connector-zero-targets.csv` — visibly broken `x:0, y:0` connector targets.

