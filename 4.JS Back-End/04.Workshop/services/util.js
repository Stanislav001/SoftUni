function accessoryViewModel(accessory) {
    return {
        id: accessory._id,
        name: accessory.name,
        description: accessory.description,
        imageUrl: accessory.imageUrl,
        price: accessory.price
    }
}

function carViewModel(carModel) {
    const model = {
        id: carModel._id,
        name: carModel.name,
        description: carModel.description,
        imageUrl: carModel.imageUrl,
        price: carModel.price,
        accessories: carModel.accessories,
    }

    if (carModel.accessories.length > 0 && carModel.accessories[0].name) {
        model.accessories = model.accessories.map(accessoryViewModel);
    }

    return model;
}


module.exports = {
    accessoryViewModel,
    carViewModel
}