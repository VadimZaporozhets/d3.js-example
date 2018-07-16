(function(){
    var svg = d3.select('#nevaal'),
        width = +svg.attr('width'),
        height = +svg.attr('height'),
        memberTileWidth = 72,
        memberTileHeigth = 72;
    
    var color = d3.scaleOrdinal(d3.schemeCategory20);
    
    var simulation = d3.forceSimulation()
        .force('link', d3.forceLink().id(function(d) { return d.name; }))
        .force('charge', d3.forceManyBody().strength(-2000))
        .force('center', d3.forceCenter(width / 2, height / 2));
        
    var link = svg.append('g')
        .attr('class', 'links')
            .selectAll('line')
            .data(data.links)
            .enter().append('line')
            .attr('stroke-width', '1px')
            .attr('stroke', '#000');
    
    var node = d3.select('#uKnightTeam')
        .selectAll('div')
        .data(data.nodes)
        .enter()
        .append('div')
        .attr('class', 'team-member-wrapper')
        .style('border', function(d) {
            return '3px solid ' + color(d.position);
        })
        .style('background-color', function(d) {
            return color(d.position);
        })
        .style('width', function(d) {
            return d.weight * memberTileWidth + 'px';
        })
        .style('height', function(d) {
            return d.weight * memberTileHeigth + 'px';
        })
        .on('mouseover', mouseoverHandler)
        .on('mouseout', mouseoutHandler)
        .call(d3.drag()
            .on('start', dragstartHandler)
            .on('drag', dragHandler)
            .on('end', dragendHandler));
        
    
        
    node.append('img')
        .attr('class', 'team-member')
        .attr('src', function(d) {
            return 'team/' + d.image;
        });

    node.append('p')
        .attr('class', 'team-member-name')
        .style('color', function(d) {
            return color(d.position)
        })
        .text(function(d) {
            return d.name;
        });

    node.append('p')
        .attr('class', 'team-member-position')
        .style('color', function(d) {
            return color(d.position)
        })
        .text(function(d) {
            return d.position;
        });
    
    
    simulation
        .nodes(data.nodes)
        .on('tick', ticked);
    
    simulation.force('link')
        .links(data.links);
    
    function ticked() {
        link
            .attr('x1', function(d) { return d.source.x; })
            .attr('y1', function(d) { return d.source.y; })
            .attr('x2', function(d) { return d.target.x; })
            .attr('y2', function(d) { return d.target.y; });
        
        node
            .style('left', function(d) { return d.x - 36 + 'px'; })
            .style('top', function(d) { return d.y - 36 + 'px'; });
    }

    function mouseoverHandler(d) {
        d3.select(this)
            .select('.team-member')
            .transition()
            .style('opacity', 1);

        d3.select(this)
            .select('.team-member-position')
            .transition()
            .style('opacity', 1);
    }

    function mouseoutHandler(d) {
        d3.select(this)
            .select('.team-member')
            .transition()
            .style('opacity', 0);

        d3.select(this)
            .select('.team-member-position')
            .transition()
            .style('opacity', 0);
    }
    
    function dragstartHandler(d) {
        if (!d3.event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }
    
    function dragHandler(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
    }
    
    function dragendHandler(d) {
        if (!d3.event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }
})();