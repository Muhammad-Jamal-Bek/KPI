import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
  CLink,
} from '@coreui/react'

const EmployeesKPI = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>EmployeesKPI</strong>
          </CCardHeader>
          <CCardBody>
            <CTable color="dark">
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">KPIs</CTableHeaderCell>
                  <CTableHeaderCell scope="col" style={{ textAlign: 'center' }}>
                    Average Preformance
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">Operations</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row">Employee 1</CTableHeaderCell>
                  <CTableDataCell style={{ textAlign: 'center' }}>9</CTableDataCell>
                  <CTableDataCell>
                    <CLink to="/KPI_Input">
                      <CButton color={'warning'} variant="outline" key={0}>
                        Graph
                      </CButton>
                    </CLink>
                    <CButton color={'info'} variant="outline" key={0} style={{ marginLeft: 20 }}>
                      Edit
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">Employee 2</CTableHeaderCell>
                  <CTableDataCell style={{ textAlign: 'center' }}>6</CTableDataCell>
                  <CTableDataCell>
                    <CButton color={'warning'} variant="outline" key={0}>
                      Graph
                    </CButton>
                    <CButton color={'info'} variant="outline" key={0} style={{ marginLeft: 20 }}>
                      Edit
                    </CButton>{' '}
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">Employee 3</CTableHeaderCell>
                  <CTableDataCell style={{ textAlign: 'center' }}>7</CTableDataCell>
                  <CTableDataCell>
                    <CButton color={'warning'} variant="outline" key={0}>
                      Graph
                    </CButton>
                    <CButton color={'info'} variant="outline" key={0} style={{ marginLeft: 20 }}>
                      Edit
                    </CButton>{' '}
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">Employee 4</CTableHeaderCell>
                  <CTableDataCell style={{ textAlign: 'center' }}>7</CTableDataCell>
                  <CTableDataCell>
                    <CButton color={'warning'} variant="outline" key={0}>
                      Graph
                    </CButton>
                    <CButton color={'info'} variant="outline" key={0} style={{ marginLeft: 20 }}>
                      Edit
                    </CButton>{' '}
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">Employee 5</CTableHeaderCell>
                  <CTableDataCell style={{ textAlign: 'center' }}>6</CTableDataCell>
                  <CTableDataCell>
                    <CButton color={'warning'} variant="outline" key={0}>
                      Graph
                    </CButton>
                    <CButton color={'info'} variant="outline" key={0} style={{ marginLeft: 20 }}>
                      Edit
                    </CButton>{' '}
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">Employee 6</CTableHeaderCell>
                  <CTableDataCell style={{ textAlign: 'center' }}>8</CTableDataCell>
                  <CTableDataCell>
                    <CButton color={'warning'} variant="outline" key={0}>
                      Graph
                    </CButton>
                    <CButton color={'info'} variant="outline" key={0} style={{ marginLeft: 20 }}>
                      Edit
                    </CButton>{' '}
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">Employee 7</CTableHeaderCell>
                  <CTableDataCell style={{ textAlign: 'center' }}>7</CTableDataCell>
                  <CTableDataCell>
                    <CButton color={'warning'} variant="outline" key={0}>
                      Graph
                    </CButton>
                    <CButton color={'info'} variant="outline" key={0} style={{ marginLeft: 20 }}>
                      Edit
                    </CButton>{' '}
                  </CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardBody>
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="row" style={{ textAlign: 'center' }}>
                    Company&apos;s KPI:
                  </CTableHeaderCell>
                  <CTableDataCell>
                    <strong>{(7 * 10) / 7}</strong>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CButton color={'primary'} variant="outline" key={0} style={{ marginLeft: 20 }}>
                      Print Full Report
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
              </CTableHead>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default EmployeesKPI
