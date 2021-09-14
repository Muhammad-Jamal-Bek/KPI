import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'KPIs',
    to: '/KPIs',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Charts',
        to: '/charts',
        icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "Employee's KPI",
        to: '/employeesKPI',
        icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Input KPI',
        to: '/KPI_Input',
        icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Reports',
        to: '/reports',
        icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
      },
    ],
  },
]

export default _nav
