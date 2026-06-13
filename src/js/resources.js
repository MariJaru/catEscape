import {ImageSource, Sound, Resource, Loader, ImageWrapping} from 'excalibur'
import {SmallPlatform} from "./smallPlatform.js";

// voeg hier jouw eigen resources toe
const Resources = {
    BeigeBG: new ImageSource('images/beigeBG.jpg'),
    RedBG: new ImageSource('images/redBG.jpg'),
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
    SmallPlatform: new ImageSource('images/smallWoodenPlatform.png'),
    Platform: new ImageSource('images/woodenPlatform.png')
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