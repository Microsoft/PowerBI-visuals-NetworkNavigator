/*
 * Copyright (c) Microsoft
 * All rights reserved.
 * MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * The node in a graph
 */
export interface INetworkNavigatorNode {
    /**
     * The name of the node
     */
    name?: string;

    /**
     * The color of the node
     */
    color?: string;

    /**
     * The color of the label of the node
     */
    labelColor?: string;

    /**
     * The size of the node
     */
    value?: number;

    /**
     * Whether or not the given node is selected
     */
    selected: boolean;
}

/**
 * Represents a link in the network navigator
 */
export interface INetworkNavigatorLink {
    /**
     * The source node, index into the nodes list
     */
    source?: number;

    /**
     * The target node, index into the nodes list
     */
    target?: number;

    /**
     * The value of the link, basically the weight of the edge
     */
    value?: number;
}

/**
 * The data for the network navigator
 */
export interface INetworkNavigatorData<NodeType> {

    /**
     * The list of the nodes in the network navigator
     */
    nodes?: NodeType[];

    /**
     * The links in the network navigator
     */
    links?: INetworkNavigatorLink[];
}

/**
 * Represents the configuration for the network navigator
 */
export interface INetworkNavigatorConfiguration {
    animate?: boolean;
    linkDistance?: number;
    linkStrength?: number;
    charge?: number;
    gravity?: number;
    labels?: boolean;
    minZoom?: number;
    maxZoom?: number;
    defaultLabelColor?: string;
    caseInsensitive?: boolean;

    /**
     * The font size to use in PT
     */
    fontSizePT?: number;
}