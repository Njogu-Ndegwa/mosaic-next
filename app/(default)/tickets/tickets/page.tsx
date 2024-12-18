export const metadata = {
  title: 'Inventory - Mosaic',
  description: 'Page description',
}

import { SelectedItemsProvider } from '@/app/selected-items-context'
import SearchForm from '@/components/search-form'
import DeleteButton from '@/components/delete-button'
import DateSelect from '@/components/date-select'
import FilterButton from '@/components/dropdown-filter'
import InvoicesTable from './invoices-table'
import PaginationClassic from '@/components/pagination-classic'
import Link from 'next/link'
function InvoicesContent() {

  // Some dummy invoices data
  const invoices = [
    {
      id: 0,
      invoice: '#123567',
      priority: 'High',
      status: 'Opened',
      assignedTo: 'Dennis Njogu',
      assignedBy: "Huashang Wang",
      type: 'Faulty Battery',
      issueddate: '22/07/2024',
      paiddate: '24/07/2024',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 1,
      invoice: '#779912',
      priority: 'High',
      status: 'Assigned',
      assignedTo: 'Rodgers Muyira',
      assignedBy: "Alpha Guo",
      type: 'Bad Motor',
      issueddate: '19/07/2024',
      paiddate: '20/07/2024',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 2,
      invoice: '#889924',
      priority: 'Medium',
      status: 'Closed',
      assignedTo: 'Ruben Omari',
      assignedBy: "Huashang Wang",
      type: 'Faulty Panel',
      issueddate: '17/07/2024',
      paiddate: '19/07/2024',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 3,
      invoice: '#897726',
      priority: 'High',
      status: 'Resolved',
      assignedTo: 'Dennis Njogu',
      assignedBy: "Alpha Guo",
      type: 'Faulty Pannel',
      issueddate: '04/07/2024',
      paiddate: '05/07/2024',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 4,
      invoice: '#123567',
      priority: 'Low',
      status: 'Assigned',
      assignedTo: 'Dennis Njogu',
      assignedBy: "Huashang Wang",
      type: 'Faulty Battery',
      issueddate: '04/07/2024',
      paiddate: '06/07/2024',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 5,
      invoice: '#896644',
      priority: 'High',
      status: 'Opened',
      assignedTo: 'Dennis Njogu',
      assignedBy: "Alpha Guo",
      type: 'Faulty Battery',
      issueddate: '04/07/2024',
      paiddate: '09/07/2024',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 6,
      invoice: '#136988',
      priority: 'Low',
      status: 'Opened',
      assignedTo: 'Rodgers Muyira',
      assignedBy: "Huashang Wang",
      type: 'Slow Bike',
      issueddate: '01/07/2024',
      paiddate: '01/07/2024',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 7,
      invoice: '#442206',
      priority: 'Medium',
      status: 'Assigned',
      assignedTo: 'Dennis Njogu',
      assignedBy: "Huashang Wang",
      type: 'Faulty Battery',
      issueddate: '22/06/2024',
      paiddate: '23/06/2024',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 8,
      invoice: '#764321',
      priority: 'Low',
      status: 'Closed',
      assignedTo: 'Dennis Njogu',
      assignedBy: "Huashang Wang",
      type: 'Faulty Battery',
      issueddate: '21/06/2024',
      paiddate: '29/06/2024',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 9,
      invoice: '#908764',
      priority: 'Low',
      status: 'Resolved',
      assignedTo: 'Evans Musamia',
      assignedBy: "Huashang Wang",
      type: 'Faulty Battery',
      issueddate: '17/06/2024',
      paiddate: '18/06/2024',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ]

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
      {/* Page header */}
      <div className="sm:flex sm:justify-between sm:items-center mb-5">

        {/* Left: Title */}
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">Tickets</h1>
        </div>

        {/* Right: Actions */}
        <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
          {/* Search form */}
          <SearchForm placeholder="Search by ticket…" />
          {/* Create invoice button */}
          {/* <button className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">
            <svg className="fill-current shrink-0 xs:hidden" width="16" height="16" viewBox="0 0 16 16">
              <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
            </svg>
            <span className="max-xs:sr-only">Create Inventory</span>
          </button> */}
          <Link
            href="/tickets/tickets/add" // Replace with your desired path
            className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white flex items-center justify-center"
          >
            <svg
              className="fill-current shrink-0 xs:hidden"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
            </svg>
            <span className="max-xs:sr-only">Open Ticket</span>
          </Link>
        </div>

      </div>

      {/* More actions */}
      <div className="sm:flex sm:justify-between sm:items-center mb-5">

        {/* Left side */}
        <div className="mb-4 sm:mb-0">
          <ul className="flex flex-wrap -m-1">
            <li className="m-1">
              <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-800 transition">All <span className="ml-1 text-gray-400 dark:text-gray-500">87</span></button>
            </li>
            <li className="m-1">
              <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 shadow-sm bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 transition">Opened <span className="ml-1 text-gray-400 dark:text-gray-500">14</span></button>
            </li>
            <li className="m-1">
              <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 shadow-sm bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 transition">Assigned <span className="ml-1 text-gray-400 dark:text-gray-500">34</span></button>
            </li>
            <li className="m-1">
              <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 shadow-sm bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 transition">Resolved <span className="ml-1 text-gray-400 dark:text-gray-500">19</span></button>
            </li>
            <li className="m-1">
              <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 shadow-sm bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 transition">Closed <span className="ml-1 text-gray-400 dark:text-gray-500">20</span></button>
            </li>
          </ul>
        </div>

        {/* Right side */}
        <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
          {/* Delete button */}
          <DeleteButton />
          {/* Dropdown */}
          <DateSelect />
          {/* Filter button */}
          <FilterButton align="right" />
        </div>

      </div>

      {/* Table */}
      <InvoicesTable invoices={invoices} />

      {/* Pagination */}
      <div className="mt-8">
        <PaginationClassic />
      </div>
    </div>
  )
}

export default function Invoices() {
  return (
    <SelectedItemsProvider>
      <InvoicesContent />
    </SelectedItemsProvider>
  )
}