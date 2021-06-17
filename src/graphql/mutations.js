/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const createProducts = /* GraphQL */ `
  mutation CreateProducts(
    $input: CreateProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    createProducts(input: $input, condition: $condition) {
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
export const updateProducts = /* GraphQL */ `
  mutation UpdateProducts(
    $input: UpdateProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    updateProducts(input: $input, condition: $condition) {
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
export const deleteProducts = /* GraphQL */ `
  mutation DeleteProducts(
    $input: DeleteProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    deleteProducts(input: $input, condition: $condition) {
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
export const createCompany = /* GraphQL */ `
  mutation CreateCompany(
    $input: CreateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    createCompany(input: $input, condition: $condition) {
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
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $input: UpdateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    updateCompany(input: $input, condition: $condition) {
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
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany(
    $input: DeleteCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    deleteCompany(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
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
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
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
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
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
export const createEmployee = /* GraphQL */ `
  mutation CreateEmployee(
    $input: CreateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    createEmployee(input: $input, condition: $condition) {
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
export const updateEmployee = /* GraphQL */ `
  mutation UpdateEmployee(
    $input: UpdateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    updateEmployee(input: $input, condition: $condition) {
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
export const deleteEmployee = /* GraphQL */ `
  mutation DeleteEmployee(
    $input: DeleteEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    deleteEmployee(input: $input, condition: $condition) {
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
export const createWarehouse = /* GraphQL */ `
  mutation CreateWarehouse(
    $input: CreateWarehouseInput!
    $condition: ModelWarehouseConditionInput
  ) {
    createWarehouse(input: $input, condition: $condition) {
      id
      name
      companyID
      createdAt
      updatedAt
      employees {
        nextToken
      }
    }
  }
`;
export const updateWarehouse = /* GraphQL */ `
  mutation UpdateWarehouse(
    $input: UpdateWarehouseInput!
    $condition: ModelWarehouseConditionInput
  ) {
    updateWarehouse(input: $input, condition: $condition) {
      id
      name
      companyID
      createdAt
      updatedAt
      employees {
        nextToken
      }
    }
  }
`;
export const deleteWarehouse = /* GraphQL */ `
  mutation DeleteWarehouse(
    $input: DeleteWarehouseInput!
    $condition: ModelWarehouseConditionInput
  ) {
    deleteWarehouse(input: $input, condition: $condition) {
      id
      name
      companyID
      createdAt
      updatedAt
      employees {
        nextToken
      }
    }
  }
`;
export const createAccountRepresentative = /* GraphQL */ `
  mutation CreateAccountRepresentative(
    $input: CreateAccountRepresentativeInput!
    $condition: ModelAccountRepresentativeConditionInput
  ) {
    createAccountRepresentative(input: $input, condition: $condition) {
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
export const updateAccountRepresentative = /* GraphQL */ `
  mutation UpdateAccountRepresentative(
    $input: UpdateAccountRepresentativeInput!
    $condition: ModelAccountRepresentativeConditionInput
  ) {
    updateAccountRepresentative(input: $input, condition: $condition) {
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
export const deleteAccountRepresentative = /* GraphQL */ `
  mutation DeleteAccountRepresentative(
    $input: DeleteAccountRepresentativeInput!
    $condition: ModelAccountRepresentativeConditionInput
  ) {
    deleteAccountRepresentative(input: $input, condition: $condition) {
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
export const createCurrentInventory = /* GraphQL */ `
  mutation CreateCurrentInventory(
    $input: CreateCurrentInventoryInput!
    $condition: ModelCurrentInventoryConditionInput
  ) {
    createCurrentInventory(input: $input, condition: $condition) {
      productID
      warehouseID
      inventoryAmount
      createdAt
      updatedAt
    }
  }
`;
export const updateCurrentInventory = /* GraphQL */ `
  mutation UpdateCurrentInventory(
    $input: UpdateCurrentInventoryInput!
    $condition: ModelCurrentInventoryConditionInput
  ) {
    updateCurrentInventory(input: $input, condition: $condition) {
      productID
      warehouseID
      inventoryAmount
      createdAt
      updatedAt
    }
  }
`;
export const deleteCurrentInventory = /* GraphQL */ `
  mutation DeleteCurrentInventory(
    $input: DeleteCurrentInventoryInput!
    $condition: ModelCurrentInventoryConditionInput
  ) {
    deleteCurrentInventory(input: $input, condition: $condition) {
      productID
      warehouseID
      inventoryAmount
      createdAt
      updatedAt
    }
  }
`;
