---
// src/components/ModCard.astro  (or .tsx if using React components)
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface Props {
  mod: {
    id: number;
    name: string;
    author: string;
    version: string;
    description: string;
    category: string;
    downloads: number;
    image?: string;
    compatible?: string[];
  };
  installed?: boolean;
}

const { mod, installed = false } = Astro.props;
---

<div class="group border border-border rounded-xl overflow-hidden bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
  <div class="relative h-48 bg-muted">
    <img 
      src={mod.image || '/default-mod.png'} 
      class="w-full h-full object-cover" 
      alt={mod.name}
    />
    {installed && (
      <div class="absolute top-3 right-3">
        <Badge variant="default" class="bg-green-600">Installed</Badge>
      </div>
    )}
  </div>
  
  <div class="p-5">
    <div class="flex justify-between items-start">
      <h3 class="text-lg font-semibold line-clamp-1">{mod.name}</h3>
      <span class="text-xs text-muted-foreground">{mod.version}</span>
    </div>
    
    <p class="text-sm text-muted-foreground mt-1">by {mod.author}</p>
    
    <p class="mt-3 text-sm line-clamp-2 text-foreground/80">{mod.description}</p>
    
    <div class="flex flex-wrap gap-1 mt-4">
      <Badge variant="secondary">{mod.category}</Badge>
      {mod.compatible?.map(c => <Badge variant="outline" class="text-xs">{c}</Badge>)}
    </div>
    
    <div class="flex items-center justify-between mt-5">
      <div class="text-xs text-muted-foreground">
        {mod.downloads.toLocaleString()} downloads
      </div>
      
      <Button 
        variant={installed ? "secondary" : "default"}
        class="w-32"
        onclick={`installMod(${mod.id})`}
      >
        {installed ? "Manage" : "Install"}
      </Button>
    </div>
  </div>
</div>

<script>
  function installMod(id: number) {
    // TODO: Call your API or simulate download
    alert(`Installing mod #${id}... (connect this to your backend)`);
  }
</script>
