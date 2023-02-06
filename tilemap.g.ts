// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000001010302040404040404040401000000010203020404040404040401040000000102040302040404040401040400000001020404030204040404040404000000010204040404040404040404040000000102040404040404040403040400000001020404040104040403040304000000010204040404010404040303040000000102040404010404040404040400000001010202020202020202020202000000010104040104010101040404040000000101040401010404010404040400000001010404010401010101040404000000010304040404040404040404040000000103040404040104040401040400000001030404040404010104040404`, img`
. . . . 2 . . . . . . . . . . . 
. . . . 2 . . . . . . . . . . . 
. . . . 2 . . . . . . . . . . . 
. . . . 2 . . . . . . . . . . . 
. . . . 2 . . . . . . . . . . . 
. . . . 2 . . . . . . . . . . . 
. . . . 2 . . . . . . . . . . . 
. . . . 2 . . . . . . . . . . . 
. . . . 2 . . . . . . . . . . . 
. . . . 2 . . . . . . . . . . . 
. . . . 2 . . . . . . . . . . . 
. . . . 2 . . . . . . . . . . . 
. . . . 2 . . . . . . . . . . . 
. . . . 2 . . . . . . . . . . . 
. . . . 2 . . . . . . . . . . . 
. . . . 2 . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000001000000000100000000000000000000010000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000001000000010000000001000000010000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000010000000000000000000000000000000000010000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . 2 . . . . 2 . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . . . . . . . . . . 2 . . . 
. . . . . . . . . . . . . . . . 
. . . . . 2 . . . 2 . . . . 2 . 
. . 2 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 2 . . . . . . . . . . . 
. . . . . . . . 2 . . . . . . . 
. . . . . . . . . . 2 . . . . . 
. . . . . . . . . . . . . . 2 . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.floorDark0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
