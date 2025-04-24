import { useState } from 'react';
import { UploadIcon, GridIcon, ListIcon, SearchIcon, TrashIcon } from 'lucide-react';
export const MediaManagement = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  // Mock media items
  const mediaItems = [{
    id: 1,
    title: 'Crochet Noodles',
    url: "/cooking-free-template-for-figma-02.webp",
    type: 'image',
    size: '243 KB',
    dimensions: '800x600',
    uploadedAt: 'Nov 17, 2023'
  }, {
    id: 2,
    title: 'Vegetarian Bowl',
    url: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmVnZXRhcmlhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    type: 'image',
    size: '156 KB',
    dimensions: '500x375',
    uploadedAt: 'Nov 12, 2023'
  }, {
    id: 3,
    title: 'Chef Working',
    url: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    type: 'image',
    size: '324 KB',
    dimensions: '500x375',
    uploadedAt: 'Nov 12, 2023'
  }, {
    id: 4,
    title: 'Vegetarian Lasagna',
    url: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFzYWduYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    type: 'image',
    size: '198 KB',
    dimensions: '500x375',
    uploadedAt: 'Nov 12, 2023'
  }, {
    id: 5,
    title: 'Plantain Stew',
    url: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3Rld3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    type: 'image',
    size: '276 KB',
    dimensions: '500x375',
    uploadedAt: 'Nov 12, 2023'
  }, {
    id: 6,
    title: 'Office Desk',
    url: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    type: 'image',
    size: '187 KB',
    dimensions: '500x375',
    uploadedAt: 'Nov 12, 2023'
  }];
  const filteredMedia = mediaItems.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
  return <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Media Library</h1>
        <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-black border border-transparent rounded-md shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
          <UploadIcon size={16} className="mr-2" />
          Upload New
        </button>
      </div>
      <div className="mb-8 bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="relative flex-grow max-w-md">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <SearchIcon size={18} className="text-gray-400" />
              </div>
              <input type="text" className="block w-full py-2 pl-10 pr-3 border border-gray-300 rounded-md focus:ring-black focus:border-black" placeholder="Search media..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            </div>
            <div className="flex items-center space-x-2">
              <button onClick={() => setViewMode('grid')} className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}>
                <GridIcon size={20} className="text-gray-600" />
              </button>
              <button onClick={() => setViewMode('list')} className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}>
                <ListIcon size={20} className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>
        {viewMode === 'grid' ? <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredMedia.map(item => <div key={item.id} className="relative group">
                <div className="overflow-hidden bg-gray-100 rounded-lg aspect-w-4 aspect-h-3">
                  <img src={item.url} alt={item.title} className="object-cover w-full h-full" />
                  <div className="absolute inset-0 flex items-center justify-center transition-opacity bg-black bg-opacity-0 group-hover:bg-opacity-30">
                    <div className="hidden space-x-2 group-hover:flex">
                      <button className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-100">
                        <TrashIcon size={16} className="text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
                <p className="mt-2 text-sm font-medium text-gray-900 truncate">
                  {item.title}
                </p>
                <p className="text-xs text-gray-500">
                  {item.dimensions} • {item.size}
                </p>
              </div>)}
          </div> : <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                    File
                  </th>
                  <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                    Dimensions
                  </th>
                  <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                    Size
                  </th>
                  <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                    Uploaded
                  </th>
                  <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-right text-gray-500 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredMedia.map(item => <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img src={item.url} alt={item.title} className="object-cover w-10 h-10 rounded" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {item.title}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {item.dimensions}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{item.size}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {item.uploadedAt}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <button className="text-red-500 hover:text-red-700">
                        <TrashIcon size={18} />
                      </button>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>}
      </div>
    </div>;
};
