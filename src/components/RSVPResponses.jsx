
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


export default function RSVPResponses({ responseList, onDeleteSignUp }) {
  const yesCount = responseList.filter(response => response.attending === 'Yes').length;
  const noCount = responseList.filter(response => response.attending === 'No').length;
  const mayBeCount = responseList.filter(response => response.attending === 'MayBe').length;

  return (
    <div>
      <br></br>
      <h1><strong>RSVP RESPONSES</strong></h1>
      <table className="min-w-full divide-y divide-gray-200">
      <caption className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Responses: Yes: {yesCount}   No: {noCount}  MayBe: {mayBeCount}
      </caption>
         <thead className="bg-gray-50">
      <tr>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attending</th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity of Food</th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity of People</th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
    </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {responseList.filter(response => response.attending === 'Yes' || response.attending === 'MayBe').map((response, index) => {
  return (
    <tr key={index}>
      <td className="px-6 py-4 whitespace-nowrap">{response.firstName}</td>
      <td className="px-6 py-4 whitespace-nowrap">{response.lastName}</td>
      <td className="px-6 py-4 whitespace-nowrap">{response.attending}</td>
      <td className="px-6 py-4 whitespace-nowrap">{response.quantityFood}</td>
      <td className="px-6 py-4 whitespace-nowrap">{response.quantityPeople}</td>
      <td className="px-6 py-4 whitespace-nowrap">{response.items}</td>
      
      <td><FontAwesomeIcon icon={faTrash} onClick={()=> onDeleteSignUp(response.id)} /></td>
    </tr>
  )
})}
  </tbody>
</table> 
    </div>
  )
}
RSVPResponses.propTypes = {
  responseList: PropTypes.array,
  onDeleteSignUp: PropTypes.func
}
