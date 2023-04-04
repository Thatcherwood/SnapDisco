import { mltToXml } from 'mlt-xml';

mltToXml({ //example json. need to fill with variables from webpage
    title: 'videoname',
    elements: [
        {
            name: 'producer',
            attributes: {
                id: 'video',
                in: '0',
                out: '1000',
                resource: 'clip.mpeg',
            },
        },
    ],
});
