import {ImageSource, Sound, Resource, Loader, ImageWrapping} from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    BeigeBG: new ImageSource('images/beigeBG.jpg'),
    RedBG: new ImageSource('images/redBG.jpg'),
    ConfettiBG: new ImageSource('images/confettiBG.jpg'),
    CatSkull: new ImageSource('images/catSkull.png'),
    FatCatRightSideview: new ImageSource('images/fatCatRightSideview.png'),
    FatCatWalkingRight1: new ImageSource('images/fatCatWalkingRight1.png'),
    FatCatWalkingRight2: new ImageSource('images/fatCatWalkingRight2.png'),
    FatCatLeftSideview: new ImageSource('images/fatCatLeftSideview.png'),
    FatCatWalkingLeft1: new ImageSource('images/fatCatWalkingLeft1.png'),
    FatCatWalkingLeft2: new ImageSource('images/fatCatWalkingLeft2.png'),
    SkinnyCatSideView: new ImageSource('images/skinnyCatSideview.png'),
    SkinnyCatWalking1: new ImageSource('images/skinnyCatWalking1.png'),
    SkinnyCatWalking2: new ImageSource('images/skinnyCatWalking2.png'),
    // ga ik misschien toevoegen aan mijn game buiten dit inlevermoment:
    // Sneaking1: new ImageSource('images/sneaking1.png'),
    // Sneaking2: new ImageSource('images/sneaking2.png'),
    // Vent: new ImageSource('images/vent.png'),
    // VentOutline: new ImageSource('images/ventOutline.png'),
    // InsideVent: new ImageSource('images/insideVent.png'),
    // Button: new ImageSource('images/button.png'),
    // Key: new ImageSource('images/key.png'),
    Fish: new ImageSource('images/fish.png'),
    SmallPlatform: new ImageSource('images/smallWoodenPlatform.png'),
    Platform: new ImageSource('images/woodenPlatform.png'),
    BigPlatform: new ImageSource('images/bigWoodenPlatform.png'),
    Crate: new ImageSource('images/crate.png'),
    PressurePlate: new ImageSource('images/pressurePlate.png'),
    GreenDoor: new ImageSource('images/greenDoor.png'),
    // LockedGreenDoor: new ImageSource('images/lockedGreenDoor.png'),
    BlueDoor: new ImageSource('images/blueDoor.png'),
    // LockedBlueDoor: new ImageSource('images/lockedBlueDoor.png'),
    Thorns: new ImageSource('images/thorns.png')
}


const ResourceLoader = new Loader({
    fullscreenAfterLoad: true,
    playButtonText: 'Begin!',
    logo: './images/catEscapeLogo.png',
    logoWidth: 511,
    logoHeight: 231,
    backgroundColor: 'black'
})

for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export {Resources, ResourceLoader}