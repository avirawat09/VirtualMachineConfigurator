import './SectionBodyInstanceImage.css'
import SectionBodyInstanceImageCard from './InstanceImageCard';

function SectionBodyInstanceImage(){
    const instance_image_body = [
        {
            id: 1,
            name: 'Linux 2 image,Ubuntu Server 18.04 LTS',
            description: 'Linux 2 comes with 5 years of support. It provides Linux kernel 4.14 tuned for optimal performance',
            price: 243.61
        },
        {
            id: 2,
            name: 'Red Hat Enterprise Linux 8',
            description: 'Linux 2 comes with 5 years of support. It provides Linux kernel 4.14 tuned for optimal performance',
            price: 300
        },
        {
            id: 3,
            name: 'Microsoft Windows Server 2019 Base',
            description: 'Linux 2 comes with 5 years of support. It provides Linux kernel 4.14 tuned for optimal performance',
            price: 338.77
        },
        {
            id: 4,
            name: 'SUSE Linux Enterprise Server',
            description: 'Linux 2 comes with 5 years of support. It provides Linux kernel 4.14 tuned for optimal performance',
            price: 200.22
        }
    ]

    return  (
        <div>
            {instance_image_body.map((instance_image)=> <SectionBodyInstanceImageCard detail = {instance_image}/>)}            
        </div>
    );


}

export default SectionBodyInstanceImage;