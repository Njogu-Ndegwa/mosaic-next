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
import Image01 from '@/public/images/A.jpg'
import Image02 from '@/public/images/L300.jpg'
import Image03 from '@/public/images/E-3_L_wspsx8.png'
import Link from 'next/link'
function InvoicesContent() {

  // Some dummy invoices data
  const invoices = [
    {
      id: 0,
      invoice: '851363352',
      image: Image01,
      total: '#123567',
      status: 'On Order',
      customer: 'Angaza C741',
      type: 'L19024120001',
      issueddate: '22/07/2024',
      paiddate: '24/07/2024',
    },
    {
      id: 1,
      invoice: '851363515',
      image: Image02,
      total: '#779912',
      status: 'Available',
      customer: 'Angaza C741',
      type: 'L05424120001',
      issueddate: '19/07/2024',
      paiddate: '20/07/2024',
    },
    {
      id: 2,
      invoice: '851363344',
      image: Image03,
      total: '#889924',
      status: 'Damaged',
      customer: 'CHECH 7877',
      type: 'B29024120001',
      issueddate: '17/07/2024',
      paiddate: '19/07/2024',
    },
    {
      id: 3,
      invoice: '851363789',
      image: Image02,
      total: '#897726',
      status: 'Available',
      customer: 'BHGJ 899',
      type: 'L19024120003',
      issueddate: '04/07/2024',
      paiddate: '05/07/2024',
    },
    {
      id: 4,
      invoice: '851363980',
      image: Image01,
      total: '#123567',
      status: 'In Transit',
      customer: 'Angaza 3242',
      type: 'BY9024120008',
      issueddate: '04/07/2024',
      paiddate: '06/07/2024',
    },
    {
      id: 5,
      invoice: '851363234',
      image: Image02,
      total: '#896644',
      status: 'Available',
      customer: 'Dod D423',
      type: 'DL9024120003',
      issueddate: '04/07/2024',
      paiddate: '09/07/2024',
    },
    {
      id: 6,
      invoice: '851363453',
      image: Image01,
      total: '#136988',
      status: 'Available',
      customer: 'Angaza Y787',
      type: 'DE9024120001',
      issueddate: '01/07/2024',
      paiddate: '01/07/2024',
    },
    {
      id: 7,
      invoice: '851363543',
      image: Image02,
      total: '#442206',
      status: 'In Transit',
      customer: 'Angaza U877',
      type: 'L19024120001',
      issueddate: '22/06/2024',
      paiddate: '23/06/2024',
    },
    {
      id: 8,
      invoice: '851363879',
      image: Image01,
      total: '#764321',
      status: 'In Transit',
      customer: 'Angaza D54',
      type: 'SE9024120006',
      issueddate: '21/06/2024',
      paiddate: '29/06/2024',
    },
    {
      id: 9,
      invoice: '851363897',
      image: Image02,
      total: '#908764',
      status: 'Damaged',
      customer: 'Angaza 7641',
      type: 'DE9024120001',
      issueddate: '17/06/2024',
      paiddate: '18/06/2024',
    }
  ]

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
      {/* Page header */}
      <div className="sm:flex sm:justify-between sm:items-center mb-5">

        {/* Left: Title */}
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">Items</h1>
        </div>

        {/* Right: Actions */}
        <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
          {/* Search form */}
          <SearchForm placeholder="Search by Account No…" />
          {/* Create invoice button */}
          <Link 
          href="/ecommerce/items/add"
          className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">
            <svg className="fill-current shrink-0 xs:hidden" width="16" height="16" viewBox="0 0 16 16">
              <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
            </svg>
            <span className="max-xs:sr-only">Create Items</span>
          </Link>
        </div>

      </div>

      {/* More actions */}
      <div className="sm:flex sm:justify-between sm:items-center mb-5">

        {/* Left side */}
        <div className="mb-4 sm:mb-0">
          {/* <ul className="flex flex-wrap -m-1">
            <li className="m-1">
              <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-800 transition">All <span className="ml-1 text-gray-400 dark:text-gray-500">87</span></button>
            </li>
            <li className="m-1">
              <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 shadow-sm bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 transition">Available <span className="ml-1 text-gray-400 dark:text-gray-500">14</span></button>
            </li>
            <li className="m-1">
              <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 shadow-sm bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 transition">On Order <span className="ml-1 text-gray-400 dark:text-gray-500">34</span></button>
            </li>
            <li className="m-1">
              <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 shadow-sm bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 transition">Damaged <span className="ml-1 text-gray-400 dark:text-gray-500">19</span></button>
            </li>
            <li className="m-1">
              <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 shadow-sm bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 transition">In Transit <span className="ml-1 text-gray-400 dark:text-gray-500">20</span></button>
            </li>
          </ul> */}
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