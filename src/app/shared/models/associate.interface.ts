export interface IAssociate {
  associateId: number
  name: string
  email: string
  phone: string
  managerId: number
  role: string
  department: string
  temporaryAddress: string
  permanentAddress: string
  city: string
  officeLocation: string
  joiningDate: string
  separationDate: string
  birthDate: string
  emergencyContact: string
  timesheetCompliance: boolean
  laptopCompliance: boolean
  trainingCompliance: boolean
  managerName: string
  }

export interface ICompliance {
  associateId: number  
  timesheetCompliance: boolean
  laptopCompliance: boolean
  trainingCompliance: boolean  
  }