import { DASHBOARD_ROUTES } from "@shared/const"
import {
    ChartBarStacked,
    ClipboardList,
    LayoutDashboard,
    Package,
    Settings,
    Soup,
} from "lucide-react"

export const MENU_GROUPS = [
    {
        group: "General",
        items: [
            { label: "Dashboard", to: DASHBOARD_ROUTES.HOME, icon: <LayoutDashboard /> },
            { label: "Comenzi", to: DASHBOARD_ROUTES.ORDERS, icon: <ClipboardList /> },
        ],
    },
    {
        group: "Gestiune Catalog",
        items: [
            { label: "Produse", to: DASHBOARD_ROUTES.PRODUCTS, icon: <Package /> },
            { label: "Categorii", to: DASHBOARD_ROUTES.CATEGORIES, icon: <ChartBarStacked /> },
            { label: "Ingrediente", to: DASHBOARD_ROUTES.INGREDIENTS, icon: <Soup /> },
        ],
    },
    {
        group: "Administrare",
        items: [{ label: "Setari", to: DASHBOARD_ROUTES.SETTINGS, icon: <Settings /> }],
    },
]
