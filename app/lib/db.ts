/**
 * Database utilities (placeholder)
 *
 * Replace this lightweight stub with a real implementation (Prisma, pg, TypeORM)
 * for production. Example: use Prisma with `prisma generate` and export a singleton
 * PrismaClient instance from here.
 */

export type AuditRecord = {
  id: string;
  userId?: string | null;
  code: string;
  result: string;
  createdAt: string;
};

// In-memory demo store (for development/demo only)
const store: AuditRecord[] = [];

export async function saveAudit(record: Omit<AuditRecord, "id" | "createdAt">) {
  const id = `audit_${Date.now()}`;
  const createdAt = new Date().toISOString();
  const rec: AuditRecord = { id, createdAt, ...record };
  store.unshift(rec);
  return rec;
}

export async function listAudits(limit = 20) {
  return store.slice(0, limit);
}

export async function getAudit(id: string) {
  return store.find((s) => s.id === id) ?? null;
}

export default { saveAudit, listAudits, getAudit };
