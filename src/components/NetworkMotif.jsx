// A quiet nod to "computer networks" from the resume's profile — a small node graph,
// not a decorative gradient blob. One orchestrated pulse animation, nothing scattered.

const nodes = [
  { x: 60, y: 60 }, { x: 200, y: 30 }, { x: 320, y: 90 },
  { x: 120, y: 160 }, { x: 260, y: 200 }, { x: 40, y: 240 },
  { x: 340, y: 260 }, { x: 190, y: 300 },
];

const edges = [
  [0, 1], [1, 2], [0, 3], [1, 4], [3, 5], [4, 6], [3, 4], [4, 7], [2, 4],
];

export default function NetworkMotif() {
  return (
    <svg
      viewBox="0 0 380 340"
      className="w-full h-auto max-w-md mx-auto animate-dash"
      role="img"
      aria-label="Illustration of a connected node network"
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="#3BB6A6"
          strokeWidth="1.5"
          style={{ animationDelay: `${i * 90}ms` }}
        />
      ))}
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r={i === 4 ? 7 : 5} fill="#131A2A" stroke="#4FD6C0" strokeWidth="1.5">
          <animate
            attributeName="r"
            values={`${i === 4 ? 7 : 5};${i === 4 ? 9 : 7};${i === 4 ? 7 : 5}`}
            dur="3.2s"
            begin={`${i * 0.25}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </svg>
  );
}
