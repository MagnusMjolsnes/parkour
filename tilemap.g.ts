// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1400080000000000000000000000000000000000000000000000000000000000000000000004000000000006000000000000000000000000000300000000040000000000000000000300000000030007000003030000000000000000030000000003000300000000080000000000000003000004000300000000000000000704000300000300000300000000000000000101010205050505050505050505050505050505`, img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . 2 2 
. . . . . . . . . . . . . . . 2 . . . . 
. . . . . . . . . . . . . 2 . . . . . . 
. . . . . 2 . . 2 . . 2 . . . . . . . . 
2 2 2 2 . . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.builtin.forestTiles0,sprites.swamp.swampTile0,sprites.dungeon.hazardLava1,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.chestClosed,sprites.dungeon.collectibleRedCrystal], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`2300080000000000000003030303030303030300000000000000000000000000000000000000000000000000000303030303030303030000000000000000000000000000000000000000000000000000030303030303030303000000000000000000000000000000000000000400000000000003030303080303030300000000000000000700000008000000000007000000000000000303030303030303030000000000000000000000070000000300030303050000000000030303030303030303000300000800030000000000000000000000000000070800030003030303030303030300000003030000000000000000000000000000000101020606060606060606060606060606060606060606060606060606060606060606`, img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . 2 . 2 2 2 
. . . . . . 2 . 2 2 . 2 . . 2 . 2 . . . . 2 . 2 . 2 . . . . . . . . . 
. . . . 2 . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . 
2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.builtin.forestTiles0,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.hazardLava1,sprites.swamp.swampTile1,sprites.dungeon.chestClosed], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
