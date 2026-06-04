import {ImageSource, Sound, Resource, Loader} from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    BeigeBG: new ImageSource('images/beigeBG.jpg'),
    FatCat: new ImageSource('images/fatCatRightSideview.png'),
    SkinnyCatSideView: new ImageSource('images/skinnyCatSideview.png'),
    SkinnyCatWalking1: new ImageSource('images/skinnyCatWalking1.png'),
    SkinnyCatWalking2: new ImageSource('images/skinnyCatWalking2.png'),
    Platform: new ImageSource('images/woodenPlatform.png'),
    BigPlatform: new ImageSource('images/bigWoodenPlatform.png')
}


const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export {Resources, ResourceLoader}