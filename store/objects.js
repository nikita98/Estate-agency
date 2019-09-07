export const state = () => ({
  objects: [
    {
      'id': 'agh32nrj23',
      'ownerId': '0',
      'holder': {
        'name': 'Василий Пупкин',
        'phone': '8 (999) 111 22 33',
        'email': 'vasya-pup@uk.com'
      },
      'createdAt': 1567417235910,
      'sold': true,
      'type': 'garage',
      'photos': [
        { 'id': '1',
          'title': 'Ворота',
          'image': 'https://via.placeholder.com/150/24f355',
          'description': 'Далеко-далеко за словесными горами в стране гласных и согласных, живут рыбные тексты. Подзаголовок, которое.' },
        { 'id': '1',
          'title': 'Ворота',
          'image': 'https://via.placeholder.com/150/24f355',
          'description': 'Далеко-далеко за словесными горами в стране гласных и согласных, живут рыбные тексты. Подзаголовок, которое.' },
        { 'id': '1',
          'title': 'Ворота',
          'image': 'https://via.placeholder.com/150/24f355',
          'description': 'Далеко-далеко за словесными горами в стране гласных и согласных, живут рыбные тексты. Подзаголовок, которое.' }
      ],
      'аrea': 21.35,
      'basement': true,
      'heating': true
    },
    {
      'id': 'dhgi3r5asfs',
      'ownerId': '1',
      'holder': {
        'name': 'Василий Пупкин',
        'phone': '8 (999) 111 22 33',
        'email': 'vasya-pup@uk.com'
      },
      'createdAt': 1567417235910,
      'sold': true,
      'type': 'garage',
      'photos': [
        { 'id': '1',
          'title': 'Ворота',
          'image': 'https://via.placeholder.com/150/24f355',
          'description': 'Далеко-далеко за словесными горами в стране гласных и согласных, живут рыбные тексты. Подзаголовок, которое.' }
      ],
      'аrea': 21.35,
      'basement': true,
      'heating': true
    },
    {
      'id': 'ag7432tw4t4',
      'ownerId': '1',
      'holder': {
        'name': 'Василий Пупкин',
        'phone': '8 (999) 111 22 33',
        'email': 'vasya-pup@uk.com'
      },
      'createdAt': 1567417235910,
      'sold': true,
      'type': 'garage',
      'photos': [
        { 'id': '1',
          'title': 'Ворота',
          'image': 'https://via.placeholder.com/150/24f355',
          'description': 'Далеко-далеко за словесными горами в стране гласных и согласных, живут рыбные тексты. Подзаголовок, которое.' }
      ],
      'аrea': 21.35,
      'basement': true,
      'heating': true
    },
    {
      'id': '24qvqyguoe',
      'ownerId': '0',
      'holder': {
        'name': 'Василий Пупкин',
        'phone': '8 (999) 111 22 33',
        'email': 'vasya-pup@uk.com'
      },
      'createdAt': 1567417235910,
      'sold': true,
      'type': 'garage',
      'photos': [
        { 'id': '1',
          'title': 'Ворота',
          'image': 'https://via.placeholder.com/150/24f355',
          'description': 'Далеко-далеко за словесными горами в стране гласных и согласных, живут рыбные тексты. Подзаголовок, которое.' }
      ],
      'аrea': 21.35,
      'basement': true,
      'heating': true
    },
    {
      'id': 'eagsdf234',
      'ownerId': '1',
      'holder': {
        'name': 'Василий Пупкин',
        'phone': '8 (999) 111 22 33',
        'email': 'vasya-pup@uk.com'
      },
      'createdAt': 1567417235910,
      'sold': true,
      'type': 'garage',
      'photos': [
        { 'id': '1',
          'title': 'Ворота',
          'image': 'https://via.placeholder.com/150/24f355',
          'description': 'Далеко-далеко за словесными горами в стране гласных и согласных, живут рыбные тексты. Подзаголовок, которое.' },
        { 'id': '1',
          'title': 'Ворота',
          'image': 'https://via.placeholder.com/150/24f355',
          'description': 'Далеко-далеко за словесными горами в стране гласных и согласных, живут рыбные тексты. Подзаголовок, которое.' },
        { 'id': '1',
          'title': 'Ворота',
          'image': 'https://via.placeholder.com/150/24f355',
          'description': 'Далеко-далеко за словесными горами в стране гласных и согласных, живут рыбные тексты. Подзаголовок, которое.' },
        { 'id': '1',
          'title': 'Ворота',
          'image': 'https://via.placeholder.com/150/24f355',
          'description': 'Далеко-далеко за словесными горами в стране гласных и согласных, живут рыбные тексты. Подзаголовок, которое.' }
      ],
      'аrea': 21.35,
      'basement': true,
      'heating': true
    },
    {
      'id': 'asfgua32n5e2',
      'ownerId': '0',
      'holder': {
        'name': 'Василий Пупкин',
        'phone': '8 (999) 111 22 33',
        'email': 'vasya-pup@uk.com'
      },
      'createdAt': 1567417235910,
      'sold': true,
      'type': 'garage',
      'photos': [
        { 'id': '1',
          'title': 'Ворота',
          'image': 'https://via.placeholder.com/150/24f355',
          'description': 'Далеко-далеко за словесными горами в стране гласных и согласных, живут рыбные тексты. Подзаголовок, которое.' }
      ],
      'аrea': 21.35,
      'basement': true,
      'heating': true
    }
  ]
})

export const mutations = {
  addObject (state, object) {
    state.objects.push(object)
  }
}

export const actions = {
}

export const getters = {
  getObjects: state => state.objects,
  getUserObjects: state => (id) => {
    return state.objects.filter(object => object.ownerId === id)
  },
  getUserSoldObjects: state => (id) => {
    return state.objects.filter(object => object.ownerId === id && object.sold === true)
  },
  getUserSoldObjectsLength: (state, getters) => (id) => {
    return state.getters.getUserSoldObjects(id).length
  },
  getUserSoldObjectsLength2: (state, getters, id) => {
    return state.getters.getUserSoldObjects(id).length
  }
}
