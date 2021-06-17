/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProducts = /* GraphQL */ `
  query GetProducts($id: ID!) {
    getProducts(id: $id) {
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
export const listProductss = /* GraphQL */ `
  query ListProductss(
    $filter: ModelProductsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        model
        description
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCompany = /* GraphQL */ `
  query GetCompany($id: ID!) {
    getCompany(id: $id) {
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
export const listCompanys = /* GraphQL */ `
  query ListCompanys(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
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
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        phoneNumber
        accountRepresentativeID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEmployee = /* GraphQL */ `
  query GetEmployee($id: ID!) {
    getEmployee(id: $id) {
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
export const listEmployees = /* GraphQL */ `
  query ListEmployees(
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const employeesNewHire = /* GraphQL */ `
  query EmployeesNewHire(
    $newHire: String
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    employeesNewHire(
      newHire: $newHire
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const employeesNewHireByStartDate = /* GraphQL */ `
  query EmployeesNewHireByStartDate(
    $newHire: String
    $startDate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    employeesNewHireByStartDate(
      newHire: $newHire
      startDate: $startDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const employeeByName = /* GraphQL */ `
  query EmployeeByName(
    $name: String
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    employeeByName(
      name: $name
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const employeesByJobTitle = /* GraphQL */ `
  query EmployeesByJobTitle(
    $jobTitle: String
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    employeesByJobTitle(
      jobTitle: $jobTitle
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getWarehouse = /* GraphQL */ `
  query GetWarehouse($id: ID!) {
    getWarehouse(id: $id) {
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
export const listWarehouses = /* GraphQL */ `
  query ListWarehouses(
    $filter: ModelWarehouseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWarehouses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        companyID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAccountRepresentative = /* GraphQL */ `
  query GetAccountRepresentative($id: ID!) {
    getAccountRepresentative(id: $id) {
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
export const listAccountRepresentatives = /* GraphQL */ `
  query ListAccountRepresentatives(
    $filter: ModelAccountRepresentativeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccountRepresentatives(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        orderTotal
        salesPeriod
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const repsByPeriodAndTotal = /* GraphQL */ `
  query RepsByPeriodAndTotal(
    $salesPeriod: String
    $orderTotal: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAccountRepresentativeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    repsByPeriodAndTotal(
      salesPeriod: $salesPeriod
      orderTotal: $orderTotal
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        orderTotal
        salesPeriod
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCurrentInventory = /* GraphQL */ `
  query GetCurrentInventory($productID: ID!, $warehouseID: ID!) {
    getCurrentInventory(productID: $productID, warehouseID: $warehouseID) {
      productID
      warehouseID
      inventoryAmount
      createdAt
      updatedAt
    }
  }
`;
export const listCurrentInventorys = /* GraphQL */ `
  query ListCurrentInventorys(
    $productID: ID
    $warehouseID: ModelIDKeyConditionInput
    $filter: ModelCurrentInventoryFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCurrentInventorys(
      productID: $productID
      warehouseID: $warehouseID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        productID
        warehouseID
        inventoryAmount
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const itemsByWarehouseId = /* GraphQL */ `
  query ItemsByWarehouseId(
    $warehouseID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelCurrentInventoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    itemsByWarehouseID(
      warehouseID: $warehouseID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        productID
        warehouseID
        inventoryAmount
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
