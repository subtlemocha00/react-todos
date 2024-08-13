import { v4 as uuidv4 } from 'uuid';

export const items = [
    {
        id: uuidv4(),
        name: 'Healing Potion',
        description: 'A potion that restores 50 health points.',
        price: 10
    },
    {
        id: uuidv4(),
        name: 'Steel Sword',
        description: 'A sharp sword made of high-quality steel.', price: 15
    },
    {
        id: uuidv4(),
        name: 'Magic Staff', description: 'A staff imbued with magical properties, enhances spell power.', price: 20
    },
    {
        id: uuidv4(),
        name: 'Leather Armor', description: 'Armor made from sturdy leather, provides moderate protection.', price: 25
    },
    {
        id: uuidv4(),
        name: 'Enchanted Amulet', description: 'An amulet that grants protection from curses.', price: 30
    },
    {
        id: uuidv4(),
        name: 'Crossbow', description: 'A ranged weapon that fires bolts with great precision.', price: 35
    },
    {
        id: uuidv4(),
        name: 'Bag of Holding', description: 'A magical bag that can store more items than it appears to hold.', price: 40
    },
    {
        id: uuidv4(),
        name: 'Spell Tome', description: 'A book containing powerful spells and incantations.', price: 45
    },
    {
        id: uuidv4(),
        name: 'Elven Cloak', description: 'A cloak that enhances stealth and agility.', price: 50
    },
    {
        id: uuidv4(),
        name: 'Dragon Scale Shield', description: 'A shield made from the scales of a dragon, highly resistant to damage.', price: 55
    },
    {
        id: uuidv4(),
        name: 'Phoenix Feather', description: 'A rare feather that can be used in high-level enchantments.', price: 60
    }
];

export const appointments = [
    {
        id: uuidv4(),
        name: 'Doctor Appointment',
        date: '2024-08-05',
        time: '09:00',
        description: 'Annual physical check-up'
    },
    {
        id: uuidv4(),
        name: 'Business Meeting',
        date: '2024-08-06',
        time: '14:30',
        description: 'Quarterly business review meeting'
    },
    {
        id: uuidv4(),
        name: 'Lunch with Sarah',
        date: '2024-08-07',
        time: '12:00',
        description: 'Catch up with Sarah at the new cafe'
    },
    {
        id: uuidv4(),
        name: 'Dentist Appointment',
        date: '2024-08-08',
        time: '11:00',
        description: 'Teeth cleaning and check-up'
    },
    {
        id: uuidv4(),
        name: 'Project Presentation',
        date: '2024-08-09',
        time: '10:00',
        description: 'Presentation of the new project proposal'
    },
    {
        id: uuidv4(),
        name: 'Yoga Class',
        date: '2024-08-10',
        time: '08:00',
        description: 'Morning yoga session'
    },
    {
        id: uuidv4(),
        name: 'Dinner with Parents',
        date: '2024-08-11',
        time: '19:00',
        description: 'Family dinner at parents\' house'
    },
    {
        id: uuidv4(),
        name: 'Conference Call',
        date: '2024-08-12',
        time: '15:00',
        description: 'Call with the client to discuss project updates'
    },
    {
        id: uuidv4(),
        name: 'Hair Salon Appointment',
        date: '2024-08-13',
        time: '13:00',
        description: 'Haircut and styling'
    },
    {
        id: uuidv4(),
        name: 'Gym Session',
        date: '2024-08-14',
        time: '17:30',
        description: 'Evening workout at the gym'
    }
];

export const todoList = [
    {
        id: uuidv4(),
        name: 'Pick up finished sword from the blacksmith',
        description: 'The enchanted blade should be ready. Remember to pay the final 50 gold pieces.',
        isActive: false
    },
    {
        id: uuidv4(),
        name: 'Meet with the wizard for spellbook updates',
        description: 'Discuss new spells and exchange magical knowledge.',
        isActive: false
    },
    {
        id: uuidv4(),
        name: 'Deliver potion ingredients to the alchemist',
        description: 'Bring the dragon scales and unicorn hair to complete the invisibility potion.',
        isActive: true
    },
    {
        id: uuidv4(),
        name: 'Attend the council meeting at the castle',
        description: 'Discuss the defense strategy against the looming orc invasion.',
        isActive: false
    },
    {
        id: uuidv4(),
        name: 'Visit the healer for a health check-up',
        description: 'Ensure all ailments are cured before the upcoming quest.',
        isActive: false
    },
    {
        id: uuidv4(),
        name: 'Scout the northern forest for potential threats',
        description: 'Investigate reports of a lurking shadow beast.',
        isActive: false
    },
    {
        id: uuidv4(),
        name: 'Practice archery at the training grounds',
        description: 'Improve precision and accuracy with the longbow.',
        isActive: false
    }
];

export const cards = [
    {
        id: uuidv4(),
        name: 'Big Blonde Beer',
        description: 'The enchanted ale. Remember to pay the final 50 gold pieces.',
        isActive: false,
        price: '7.77',
        img: './src/components/List/suit_cats.jpeg'
    },
    {
        id: uuidv4(),
        name: 'Dirty Red Beer',
        description: 'The doomed ale. Remember to pay the final 666 obsidian pieces.',
        isActive: false,
        price: '6.66',
        img: './src/components/List/suit_cats.jpeg'
    },

]