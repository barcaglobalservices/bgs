/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote {
    onCreateNote {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote {
    onUpdateNote {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote {
    onDeleteNote {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProducts = /* GraphQL */ `
  subscription OnCreateProducts {
    onCreateProducts {
      id
      name
      model
      description
      owner
      createdAt
      updatedAt
      orders {
        nextToken
      }
      inventories {
        nextToken
      }
    }
  }
`;
export const onUpdateProducts = /* GraphQL */ `
  subscription OnUpdateProducts {
    onUpdateProducts {
      id
      name
      model
      description
      owner
      createdAt
      updatedAt
      orders {
        nextToken
      }
      inventories {
        nextToken
      }
    }
  }
`;
export const onDeleteProducts = /* GraphQL */ `
  subscription OnDeleteProducts {
    onDeleteProducts {
      id
      name
      model
      description
      owner
      createdAt
      updatedAt
      orders {
        nextToken
      }
      inventories {
        nextToken
      }
    }
  }
`;
export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany {
    onCreateCompany {
      id
      name
      country
      city
      street
      url
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany {
    onUpdateCompany {
      id
      name
      country
      city
      street
      url
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany {
    onDeleteCompany {
      id
      name
      country
      city
      street
      url
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
      id
      customerID
      accountRepresentativeID
      productID
      status
      amount
      date
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
      id
      customerID
      accountRepresentativeID
      productID
      status
      amount
      date
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
      id
      customerID
      accountRepresentativeID
      productID
      status
      amount
      date
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer {
    onCreateCustomer {
      id
      name
      phoneNumber
      accountRepresentativeID
      createdAt
      updatedAt
      orderByDate {
        nextToken
      }
      orderByStatusDate {
        nextToken
      }
    }
  }
`;
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer {
    onUpdateCustomer {
      id
      name
      phoneNumber
      accountRepresentativeID
      createdAt
      updatedAt
      orderByDate {
        nextToken
      }
      orderByStatusDate {
        nextToken
      }
    }
  }
`;
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer {
    onDeleteCustomer {
      id
      name
      phoneNumber
      accountRepresentativeID
      createdAt
      updatedAt
      orderByDate {
        nextToken
      }
      orderByStatusDate {
        nextToken
      }
    }
  }
`;
export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee {
    onCreateEmployee {
      id
      name
      startDate
      phoneNumber
      warehouseID
      jobTitle
      newHire
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee {
    onUpdateEmployee {
      id
      name
      startDate
      phoneNumber
      warehouseID
      jobTitle
      newHire
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee {
    onDeleteEmployee {
      id
      name
      startDate
      phoneNumber
      warehouseID
      jobTitle
      newHire
      createdAt
      updatedAt
    }
  }
`;
export const onCreateWarehouse = /* GraphQL */ `
  subscription OnCreateWarehouse {
    onCreateWarehouse {
      id
      companyID
      createdAt
      updatedAt
      employees {
        nextToken
      }
    }
  }
`;
export const onUpdateWarehouse = /* GraphQL */ `
  subscription OnUpdateWarehouse {
    onUpdateWarehouse {
      id
      companyID
      createdAt
      updatedAt
      employees {
        nextToken
      }
    }
  }
`;
export const onDeleteWarehouse = /* GraphQL */ `
  subscription OnDeleteWarehouse {
    onDeleteWarehouse {
      id
      companyID
      createdAt
      updatedAt
      employees {
        nextToken
      }
    }
  }
`;
export const onCreateAccountRepresentative = /* GraphQL */ `
  subscription OnCreateAccountRepresentative {
    onCreateAccountRepresentative {
      id
      orderTotal
      salesPeriod
      createdAt
      updatedAt
      orders {
        nextToken
      }
      customers {
        nextToken
      }
    }
  }
`;
export const onUpdateAccountRepresentative = /* GraphQL */ `
  subscription OnUpdateAccountRepresentative {
    onUpdateAccountRepresentative {
      id
      orderTotal
      salesPeriod
      createdAt
      updatedAt
      orders {
        nextToken
      }
      customers {
        nextToken
      }
    }
  }
`;
export const onDeleteAccountRepresentative = /* GraphQL */ `
  subscription OnDeleteAccountRepresentative {
    onDeleteAccountRepresentative {
      id
      orderTotal
      salesPeriod
      createdAt
      updatedAt
      orders {
        nextToken
      }
      customers {
        nextToken
      }
    }
  }
`;
export const onCreateCurrentInventory = /* GraphQL */ `
  subscription OnCreateCurrentInventory {
    onCreateCurrentInventory {
      productID
      warehouseID
      inventoryAmount
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCurrentInventory = /* GraphQL */ `
  subscription OnUpdateCurrentInventory {
    onUpdateCurrentInventory {
      productID
      warehouseID
      inventoryAmount
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCurrentInventory = /* GraphQL */ `
  subscription OnDeleteCurrentInventory {
    onDeleteCurrentInventory {
      productID
      warehouseID
      inventoryAmount
      createdAt
      updatedAt
    }
  }
`;
