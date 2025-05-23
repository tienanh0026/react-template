import { PanelRightClose } from 'lucide-react';

export function HistorySidebar() {
  const historyData = [
    {
      title: 'Recent Entities',
      histories: [
        { id: 1, question: 'Atlas Construction Technologies' },
        { id: 2, question: 'Catalyst Ventures' },
        { id: 3, question: 'Nexus Solutions' },
      ],
    },
    {
      title: 'Recent Engagements',
      histories: [
        { id: 4, question: 'Horizon Dynamics Ltd' },
        { id: 5, question: 'Locus International Co Ltd' },
        { id: 6, question: 'Circuit Nova Corporation' },
      ],
    },
  ];

  return (
    <aside className="box-border h-[calc(100svh-56px)] w-52 overflow-y-auto border-l border-[#D4D4D5] bg-white">
      <div className="flex h-[33px] items-center gap-2 border-b border-[#D6D6D6] p-2">
        <PanelRightClose color="#787878" size={16} />
        <span className="text-sm font-bold text-[#444444]">Activities</span>
      </div>
      <div className="divide-y">
        {historyData.map((item) => (
          <div className="p-4" key={item.title}>
            <span className="mb-2 block text-xs leading-[20px] font-bold text-[#787878]">
              {item.title}
            </span>
            <ul>
              {item.histories.map(({ id, question }) => (
                <li key={id} className="mb-2">
                  <a
                    href={`/history/${id}`}
                    className="block truncate rounded p-2 text-xs font-medium text-[#444444] hover:bg-gray-100"
                  >
                    {question}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
