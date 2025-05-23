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
    <aside className="w-[210px] h-[calc(100svh-56px)] bg-white border-l border-[#D4D4D5] box-border overflow-y-auto">
      <div className="h-[33px] flex gap-2 items-center border-b border-[#D6D6D6] p-2">
        <PanelRightClose color="#787878" size={16} />
        <span className="font-bold text-sm text-[#444444]">Activities</span>
      </div>
      <div className="divide-y">
        {historyData.map((item) => (
          <div className="p-4" key={item.title}>
            <span className="block font-bold text-xs leading-[20px] text-[#787878] mb-2">
              {item.title}
            </span>
            <ul>
              {item.histories.map(({ id, question }) => (
                <li key={id} className="mb-2">
                  <a
                    href={`/history/${id}`}
                    className="block font-medium text-xs text-[#444444] hover:bg-gray-100 p-2 rounded truncate"
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
