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
} from '@coreui/react'

const blockInvalidChar = (e) =>
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', 'e'].includes(e.key) &&
  e.preventDefault()

const KPI_Input = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>KPI Input</strong>
          </CCardHeader>
          <CCardBody>
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">KPI</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Minimal Requirement</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Preformance</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row">Attendance</CTableHeaderCell>
                  <CTableDataCell>9</CTableDataCell>
                  <CTableDataCell>
                    <input
                      type="number"
                      min="0"
                      max="10"
                      defaultValue={0}
                      onKeyDown={blockInvalidChar}
                    ></input>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow color="danger">
                  <CTableHeaderCell scope="row">Teamwork</CTableHeaderCell>
                  <CTableDataCell>6</CTableDataCell>
                  <CTableDataCell>
                    <input
                      type="number"
                      min="0"
                      max="10"
                      defaultValue={0}
                      onKeyDown={blockInvalidChar}
                    ></input>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow color="warning">
                  <CTableHeaderCell scope="row">Meeting Deadlines</CTableHeaderCell>
                  <CTableDataCell>8</CTableDataCell>
                  <CTableDataCell>
                    <input
                      type="number"
                      min="0"
                      max="10"
                      defaultValue={0}
                      onKeyDown={blockInvalidChar}
                    ></input>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow color="info">
                  <CTableHeaderCell scope="row">Professionalism</CTableHeaderCell>
                  <CTableDataCell>7</CTableDataCell>
                  <CTableDataCell>
                    <input
                      type="number"
                      min="0"
                      max="10"
                      defaultValue={0}
                      onKeyDown={blockInvalidChar}
                    ></input>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow color="dark">
                  <CTableHeaderCell scope="row">Average</CTableHeaderCell>
                  <CTableDataCell>7</CTableDataCell>
                  <CTableDataCell>{(4 * 10) / 4}</CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
      <CButton color={'primary'} variant="outline" key={0} style={{ width: 200, marginLeft: 15 }}>
        Submit
      </CButton>
    </CRow>
  )
}

export default KPI_Input
