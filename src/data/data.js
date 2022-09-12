export const sectionList = [
    {
        id: 1,
        name:'Choose Image',
    },
    {
        id: 2,
        name:'Choose Instance Type',
    },
    {
        id: 3,
        name:'Choose Storage and Network',
    },
    {
        id: 4,
        name:'Configure Security',
    },
    {
        id: 5,
        name:'Review & Launch',
    }
]


export const regionMap = {
    1 : 'us-east-1',
    2 : 'us-east-2',
    3 : 'us-west-1',
    4 : 'india-1'
}

export const instanceImageList = [
    {
        id: 1,
        name: 'Linux 2 image',
        description: 'Linux 2 comes with 5 years of support. It provides Linux kernel 4.14 tuned for optimal performance',
        price: 243.61
    },
    {
        id: 2,
        name: 'Ubuntu Server 18.04 LTS',
        description: 'Linux 2 comes with 5 years of support. It provides Linux kernel 4.14 tuned for optimal performance',
        price: 243.61
    },
    {
        id: 3,
        name: 'Red Hat Enterprise Linux 8',
        description: 'Linux 2 comes with 5 years of support. It provides Linux kernel 4.14 tuned for optimal performance',
        price: 300
    },
    {
        id: 4,
        name: 'Microsoft Windows Server 2019 Base',
        description: 'Linux 2 comes with 5 years of support. It provides Linux kernel 4.14 tuned for optimal performance',
        price: 338.77
    },
    {
        id: 5,
        name: 'SUSE Linux Enterprise Server',
        description: 'Linux 2 comes with 5 years of support. It provides Linux kernel 4.14 tuned for optimal performance',
        price: 200.22
    }
]

export const instanceTypeDetailList = [
    {
        id: 1,
        name: 'General Purpose',
        memoryOptions: [
            {id : 1, name: '256 MB'},
            {id : 2, name: '512 MB'},
            {id : 3, name: '1 GB'},            
            {id : 4, name: '2 GB'},            
            {id : 5, name: '4 GB'}
        ],
        cpuOptions: [
            {id : 1, name: '1 Core'},
            {id : 2, name: '2 Core'},
            {id : 3, name: '4 Core'}            
        ]
    },
    {
        id: 2,
        name: 'Storage Optimised',
        memoryOptions: [
            {id : 1, name: '16 GB'},
            {id : 2, name: '32 GB'},
            {id : 3, name: '64 GB'}
        ],
        cpuOptions: [
            {id : 1, name: '1 Core'},
            {id : 2, name: '8 Core'},
            {id : 3, name: '16 Core'}            
        ]
    },
    {
        id: 3,
        name: 'CPU Optimised',
        memoryOptions: [
            {id : 1, name: '16 GB'},
            {id : 2, name: '32 GB'},
            {id : 3, name: '64 GB'}
        ],
        cpuOptions: [
            {id : 1, name: '1 Core'},
            {id : 2, name: '2 Core'},
            {id : 3, name: '8 Core'},
            {id : 4, name: '16 Core'}            
        ]
    },
    {
        id: 4,
        name: 'Network Optimised',
        memoryOptions: [
            {id : 1, name: '256 MB'},
            {id : 2, name: '512 MB'},
            {id : 3, name: '1 GB'},
            {id : 4, name: '2 GB'},
            {id : 5, name: '4 GB'},
            {id : 6, name: '16 GB'},
            {id : 7, name: '32 GB'},
            {id : 8, name: '64 GB'}
        ],
        cpuOptions: [
            {id : 1, name: '1 Core'},
            {id : 2, name: '2 Core'},
            {id : 3, name: '4 Core'},
            {id : 4, name: '8 Core'},
            {id : 5, name: '16 Core'}            
        ]
    }
]

export const storageTypeOption = [
    {id: 1, name: "Magnetic Disks"},
    {id: 2, name: "SSD"}
]


export const ruleTypeOptions = [
    {id: 1, name: 'HTTPS'},
    {id: 2, name: 'SSH'},
    {id: 3, name: 'SMTP'}
]