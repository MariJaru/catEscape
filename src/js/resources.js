import {ImageSource, Sound, Resource, Loader} from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    beigeBG: new ImageSource('images/beigeBG.jpg')
}


const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export {Resources, ResourceLoader}